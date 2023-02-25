const Initial_State = {
    User_Data: [],
};

export const todoReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log(action.payload);
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
        case "DEL_DATA":
            const DelData = state.User_Data.filter(
                (ele) => ele.id !== action.payload
            );

            return {
                ...state,
                User_Data: DelData,
            };

        default:
            return state;
    }
};
