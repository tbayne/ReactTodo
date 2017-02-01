const React = require('react');

const AddTodo = React.createClass({

    onSubmit: function (e) {
        e.preventDefault();
        let todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this
                .props
                .onAddTodo(todoText);
        } else {
            this
                .refs
                .todoText
                .focus();
        }
    },
    render: function () {

        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="add-todo">

                    <input type="text" ref="todoText" placeholder="New Todo"/>

                    <button className="button expanded">
                        Add Todo
                    </button>

                </form >
            </div>
        );
    }
});

module.exports = AddTodo;