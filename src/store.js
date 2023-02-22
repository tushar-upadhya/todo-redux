import { createStore } from "redux";
import rootReducer from "./redux/Reducers/main";

const store = createStore(rootReducer);

export default store;
