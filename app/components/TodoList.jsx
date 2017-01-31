const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({

    render: function () {
        const {todos} = this.props;
        const renderTodos = todos.map((todo, index) => {
            return (<Todo key={index} {...todo}/>);
        });

        return (
            <div>{renderTodos}</div>
        )
    }
});

module.exports = TodoList;