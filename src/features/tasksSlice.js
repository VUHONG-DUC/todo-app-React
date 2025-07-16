import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    tasks: [],
};
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // ▼ タスクを追加する処理（addTask）を記載
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.tasks.push(newTask);
        },
        // ▼ 指定したタスクを削除する処理(deleteTask)を記載
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        // ▼ 指定したタスクの完了状態を切り替える処理(toggleTask)を記載
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
    },
});
export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;