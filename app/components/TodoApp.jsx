const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({

    getInitialState: function () {
        return {
            todos: [
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
            ]

        };
    },

    handleAddTodo: function (text) {
        alert('new todo:' + text);
    },

    render: function () {
        let {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;