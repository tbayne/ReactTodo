const React = require('react');

const TodoList = React.createClass({

    render: function () {
        let {id, text, completed} = this.props;
        return (
            <div
                onClick={() => {
                this
                    .props
                    .onToggle(id);
            }}>
                <input type="checkbox" readOnly="true" checked={completed}/> {text}
            </div>
        )
    }
});

module.exports = TodoList;