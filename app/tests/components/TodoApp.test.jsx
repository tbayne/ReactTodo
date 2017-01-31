var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to todos on handleAddToto', () => {
        const todoText = 'test text';
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos.length).toBe(1);

    })
});
