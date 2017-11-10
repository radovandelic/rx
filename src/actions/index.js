let nextTodoId = 0
export const addTodo =
    text => { // argument received from input field inside containers/AddTodo.js
        return {
            type: 'ADD_TODO', //identifier for switch case in reducers
            id: nextTodoId++,
            text
        }
    }

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
