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

        case "RMV_DATA":
            const dltData = state.User_Data.filter(
                (ele, k) => k !== action.payload
            );

            return {
                ...state,
                User_Data: dltData,
            };

        case "UPDATE_DATA":
            const updateData = state.User_Data.map((ele, k) =>
                k == action.d ? action.payload : ele
            );

            return {
                ...state,
                User_Data: updateData,
            };

        default:
            return state;
    }
};
