const dailyTodos = (state = [], action) => {
    switch (action.type) {
        case 'DAILY_TODO_ADD':
            return [...state, action.payload];
        case 'DAILY_TODO_SET':
            return [...action.payload];
        case 'DAILY_TODO_CLEAR':
            return [];
        default:
            return state;
    }
};

export default dailyTodos;