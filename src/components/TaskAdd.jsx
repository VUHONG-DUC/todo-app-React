// src/components/TaskAdd.jsx
import React, { useState } from 'react';
const TaskAdd = ({ onAddTask }) => {
    // inputValueなどの状態変数で、useStateを定義
    let [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e) => {
        // preventDefault()を使って、ページリロード防止
        e.preventDefault();
        // 空のタスク入力防止
        if(inputValue.trim() === ""){
            return;
        }
        // onAddTaskを呼び出す記載など
        onAddTask(inputValue);
        // 入力欄のリセット
        setInputValue("");
    };
    return (
        <section className="task-add">
            <form onSubmit={handleSubmit}>
                {/* 入力欄＋追加ボタンの記述 */}
                <input 
                type="text" 
                id="task-input" 
                placeholder="タスクを入力してください" 
                maxLength="50" 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button type="submit" id="add-btn">追加</button>
            </form>
        </section>
    );
};
export default TaskAdd;