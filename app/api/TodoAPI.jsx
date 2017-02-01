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

    filterBySearchText: function (todos, searchText) {
        return todos.filter((todo) => {
            if (searchText.length === 0) 
                return true;
            else if (todo.text.toLowerCase().indexOf(searchText) >= 0) {
                return true;
            } else {
                return false;
            }
        });
    },

    sortTodosByCompletedStatus: function (todos) {
        return todos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0
            }
        });
    },

    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = this.filterByShowCompleted(filteredTodos, showCompleted);

        // filter by searchText
        filteredTodos = this.filterBySearchText(filteredTodos, searchText);

        // searchText); sort todos, non-completed first
        filteredTodos = this.sortTodosByCompletedStatus(filteredTodos);

        return filteredTodos;
    }

}