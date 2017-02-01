var $ = require('jquery');
// Local Storage API
module.exports = {

    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        return todos;
    },
    getTodos: function () {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {}

        return $.isArray(todos)
            ? todos
            : [];

    },
    filterByShowCompleted: function (todos, showCompleted) {
        return todos.filter((todo) => {
            return !todo.completed || showCompleted;
        })
    },

    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = this.filterByShowCompleted(filteredTodos, showCompleted);

        // filter by searchText sort todos, non-completed first
        return filteredTodos;
    }

}