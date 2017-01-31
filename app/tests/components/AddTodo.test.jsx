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
        const todotext = "New todo"
        addtodo.refs.todotext.value = todotext;
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todotext);
    });

    it('should NOT call onAddTodo if no text is entered in new todo field', () => {
        var spy = expect.createSpy();

        var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));
        const todotext = ""
        addtodo.refs.todotext.value = todotext;
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();

    });

});