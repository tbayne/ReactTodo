const React = require('react');

const TodoList = React.createClass({

    render: function () {
        let {id, text} = this.props;
        return (
            <div>{id}. {text}</div>
        )
    }
});

module.exports = TodoList;