const React = require('react');
const moment = require('moment');

const TodoList = React.createClass({

    render: function () {
        let {id, text, completed, createdDTS, completedDTS} = this.props;
        var todoClassName = completed
            ? 'todo todo-completed'
            : 'todo';
        var renderDate = () => {
            var message = 'Created: ';
            var timestamp = createdDTS;

            if (completed) {
                message = 'Completed: '
                var timestamp = completedDTS;
            }
            return message + moment
                .unix(timestamp)
                .format('MMM Do YYYY @ HH:mm');
        };

        return (
            <div
                className={todoClassName}
                onClick={() => {
                this
                    .props
                    .onToggle(id);
            }}>
                <div>
                    <input type="checkbox" readOnly="true" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

module.exports = TodoList;