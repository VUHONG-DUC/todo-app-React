import React from 'react';
//タスクリスト表示
const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
    //マップで使って、各liを生成する
    return (
        <section className='task-list'>
            <ul>
                {tasks.map((task) =>(
                <li key={task.id}>
                    <span className={task.completed ? "completed" : ""}>{task.text}</span>
                    <button className = "toggle-btn" onClick={() => onToggleTask(task.id)}>{task.completed ? '未完了に戻す' : '完了'}</button>
                    <button className = "delete-btn" onClick={() => onDeleteTask(task.id)}>削除</button>
                </li>
                ))}
            </ul>
        </section>
    )
}
export default TaskList;