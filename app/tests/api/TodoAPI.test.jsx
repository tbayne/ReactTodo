var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [
                {
                    id: 123,
                    text: 'test all files',
                    completed: false
                }
            ]
            TodoAPI.setTodos(todos);
            const actualTodos = JSON.parse(localStorage.getItem('todos'))
            expect(actualTodos).toEqual(todos);
        })

        it('should not set invalid todos array', () => {

            var badtodos = {
                a: 'b'
            };
            TodoAPI.setTodos(badtodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });

    });

    describe('getTodos', () => {

        it('should return empty array when invalid or no data', () => {
            const todos = TodoAPI.getTodos();
            expect(todos).toEqual([]);

        });

        it('should return valid data when valid data is available', () => {
            const todos = [
                {
                    id: 123,
                    text: 'test all files',
                    completed: false
                }
            ]
            localStorage.setItem('todos', JSON.stringify(todos));
            const actualTodos = TodoAPI.getTodos();
            expect(todos).toEqual(actualTodos);

        });
    });
    describe('filterTodos', () => {
        const todos = [
            {
                id: 1,
                text: 'Feed the cat',
                completed: false
            }, {
                id: 2,
                text: 'Feed the dog',
                completed: true
            }, {
                id: 3,
                text: 'Feed the fish',
                completed: true
            }
        ];
        describe('showCompleted', () => {
            it('should return all items if showCompleted is true', () => {
                var filteredTodos = TodoAPI.filterTodos(todos, true, "");
                expect(filteredTodos.length).toBe(3);
            });
            it('should return non-completed items if showCompleted is false', () => {
                var filteredTodos = TodoAPI.filterTodos(todos, false, "");
                expect(filteredTodos.length).toBe(1);
                expect(filteredTodos[0].completed).toBe(false);
            });
        });
        describe('searchText', () => {});
        describe('sort', () => {});

    })

});
