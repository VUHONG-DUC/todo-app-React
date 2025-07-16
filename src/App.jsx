import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from './features/tasksSlice';
import TaskAdd from "./components/TaskAdd";
import TaskList from "./components/TaskList";
import TaskInfo from "./components/TaskInfo";
function App() {
    //tasks状態管理
    // const [tasks, setTasks] = useState([]);

    //Redux処理
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    // Reduxストアからタスク一覧を取得
    const tasks = useSelector((state) => state.todos.tasks);
    //タスク追加処理
    const handleAddTask = () => {
        if (inputValue.trim() === '') return;
        dispatch(addTask(inputValue.trim()));
        setInputValue('');
    };
    // タスク削除処理
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    // タスク完了状態の切り替え
    const handleToggleTask = (id) => {
        dispatch(toggleTask(id));
    };
    return (
        <div>
            <header><h1>タスクリスト</h1></header>

            <section className="task-add">
                <input
                    type="text"
                    placeholder="タスクを入力してください。"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button id="add-btn" onClick={handleAddTask}>追加</button>
            </section>
            <section className='task-list'>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span className={task.completed ? "completed" : ""}>
                                {task.text}
                            </span>
                            <button className="toggle-btn" onClick={() => handleToggleTask(task.id)}>
                                {task.completed ? '未完了に戻す' : '完了'}
                            </button>
                            <button className="delete-btn"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

    )
    //タスク追加処理
    // const handleAddTask = (inputValue) => {
    //     //重複タスクチェック
    //     const isDuplicate = tasks.some(task => task.text === inputValue.trim());
    //     if (isDuplicate) {
    //         return false;
    //     }
    //     //新しいオブジェクトを生成する
    //     const newTask = {
    //         id: Date.now(),
    //         text: inputValue,
    //         completed: false
    //     };
    //     setTasks([...tasks, newTask]);
    //     return true;
    // };
    //削除ハンドラー
    // const handleDeleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
    //完了・未完了ハンドラー
    // const handleToggleTask = (id) => {
    //     setTasks(
    //         tasks.map((task) =>
    //             task.id === id ? { ...task, completed: !task.completed } : task)
    //     )
    // };
    //未完了のタスク数
    // let incomplete = tasks.filter(task => !task.completed).length;
    //総タスク数
    // let total = tasks.length;
    // return (
    //     <>
    //         <header><h1>ToDoリストアプリ</h1></header>
    //         <TaskAdd onAddTask={handleAddTask} />
    //         <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
    //         <TaskInfo incomplete={incomplete} total={total} />
    //     </>
    // )
}
export default App;