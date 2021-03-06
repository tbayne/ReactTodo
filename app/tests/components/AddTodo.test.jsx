var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if text entered in new todo field', () => {
        var spy = expect.createSpy();

        var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));
        const todoText = "New todo"
        addtodo.refs.todoText.value = todoText;
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should NOT call onAddTodo if no text is entered in new todo field', () => {
        var spy = expect.createSpy();

        var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));
        const todoText = ""
        addtodo.refs.todoText.value = todoText;
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();

    });

});