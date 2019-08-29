const initialState = {
    isAdmin: false
};

function rootReducer(state = initialState, action) {
    if (action.type === "LOGIN") {
        return Object.assign({}, state, {
            isAdmin: !state.isAdmin,
        });
    }

    return state;
};

export default rootReducer;