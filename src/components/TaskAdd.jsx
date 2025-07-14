// src/components/TaskAdd.jsx
import React, { useState } from 'react';
const TaskAdd = ({ onAddTask }) => {

    // inputValueなどの状態変数で、useStateを定義
    const [inputValue, setInputValue] = useState("");
    //入力チェックuseStateを定義
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        // ページリロード防止
        e.preventDefault();
        // 空のタスク入力防止
        if(inputValue.trim() === ""){
            setError("タスクを入力してください。");
            return;
        }
        
        // 重複タスク入力防止
        const isDuplicate = onAddTask(inputValue.trim());
        if(!isDuplicate){
            setError("同じタスクがすでに存在しています。");
            return;
        }
        //エラーがなければ、リセット
        setError("");
        // 入力欄のリセット
        setInputValue("");
    };
    return (
        <section className="task-add">
            <form onSubmit={handleSubmit}>
                {/* 入力欄＋追加ボタン*/}
                <input 
                type="text" 
                id="task-input" 
                placeholder="タスクを入力してください" 
                maxLength="50" 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button type="submit" id="add-btn">追加</button>
                {error && <p className='error-msg'>{error}</p>}
            </form>
        </section>
    );
};
export default TaskAdd;