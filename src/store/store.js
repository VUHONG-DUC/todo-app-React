import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/task/taskSlice';

const store = configureStore({
    reducer : {
        todos : taskReducer
    }
});

export default store;