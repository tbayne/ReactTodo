const React = require('react');
const moment = require('moment');

const TodoList = React.createClass({

    render: function () {
        let {id, text, completed, createdDTS, completedDTS} = this.props;

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
                onClick={() => {
                this
                    .props
                    .onToggle(id);
            }}>
                <input type="checkbox" readOnly="true" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
});

module.exports = TodoList;