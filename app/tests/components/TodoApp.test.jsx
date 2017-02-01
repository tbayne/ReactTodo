var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to todos state on handleAddTodo', () => {
        var todoText = "test todo";
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos.length).toBe(1);

        expect(todoApp.state.todos[0].createdDTS).toBeA('number');

    })

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test Features',
            completed: false,
            createdAt: 0,
            completedDTS: undefined

        }
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});
        // check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with 11
        todoApp.handleToggle(todoData.id);
        // Verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        // Expect completedDTS to be a number
        expect(todoApp.state.todos[0].completedDTS).toBeA('number');
    });

    // Test toggle from true to false, completedDTS is unset.
    it('should toggle completed to false, unsetting completedDTS', () => {
        var todoData = {
            id: 11,
            text: 'Test Features',
            completed: true,
            createdAt: 0,
            completedDTS: 123

        }
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});
        // call handleToggle with 11
        todoApp.handleToggle(todoData.id);
        // Verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedDTS).toNotExist();

    });

});
