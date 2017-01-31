var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {

    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [
            {
                id: 1,
                text: 'Walk the dog'
            }, {
                id: 2,
                text: 'Feed the cat'
            }, {
                id: 3,
                text: 'Feed the fish'
            }
        ];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todoComponents.length).toBe(todos.length);

    });
});
