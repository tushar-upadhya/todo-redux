const Initial_State = {
    User_Data: [],
};

export const todoReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                User_Data: [...state.User_Data, action.payload],
            };

        default:
            return state;
    }
};
