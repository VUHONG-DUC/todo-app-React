import React, { useState } from "react";
import TaskAdd from "./components/TaskAdd";
import TaskList from "./components/TaskList";
import TaskInfo from "./components/TaskInfo";
function App() {
    const[tasks, setTasks] = useState([]);
    //タスク追加管理
    const handleAddTask = (inputValue) => {
        console.log(inputValue);
        const newTask = {
            id : Date.now(),
            text : inputValue,
            completed : false
        };
        setTasks([...tasks, newTask]);
    };
    //削除ハンドラー
    const handleDeleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
    //完了・未完了ハンドラー
    const handleToggleTask = (id) =>{
        setTasks(
        tasks.map((task) => 
            task.id === id ? {...task, completed : !task.completed}: task)
        )
    };
    //未完了のタスク数
    let incomplete = tasks.filter(task => !task.completed).length;
    //総タスク数
    let total = tasks.length;
    return (
        <>
            <header><h1>ToDoリストアプリ</h1></header>
            <TaskAdd onAddTask={handleAddTask}/>
            <TaskList tasks = {tasks} onDeleteTask= {handleDeleteTask} onToggleTask ={handleToggleTask}/>
            <TaskInfo incomplete = {incomplete} total = {total}/>
        </>
    )
}
export default App;