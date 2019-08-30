const initialState = {
    isAdmin: false
};

function rootReducer(state = initialState, action) {
    if (action.type === "LOGIN") {
        return Object.assign({}, state, {
            isAdmin: true,
        });
    }

    if (action.type === "LOGOUT") {
        return Object.assign({}, state, {
            isAdmin: false,
        });
    }

    return state;
};

export default rootReducer;