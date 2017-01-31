var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <TodoApp/>, document.getElementById('app'));
