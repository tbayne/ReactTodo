var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');
/*
let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;
*/

describe('TodoSearch', () => {

    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var spy = expect.createSpy();

        const todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todosearch));
        const searchText = "some todo"
        todosearch.refs.searchText.value = searchText;
        TestUtils
            .Simulate
            .change(todosearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, searchText);
    });

    it('should call onSearch when checkbox is changed', () => {
        var spy = expect.createSpy();

        const todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todosearch));

        todosearch.refs.showCompleted.checked = true;
        TestUtils
            .Simulate
            .change(todosearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, '');
    });

});
