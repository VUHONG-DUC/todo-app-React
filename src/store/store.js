import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasksSlice";

export const store = configureStore({
    reducer : {
        todos : taskReducer
    }
});

export default store;