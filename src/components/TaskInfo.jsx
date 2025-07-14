import React from 'react';

//タスク情報を表示
const TaskInfo = (props) =>{
    return(
        <section>
            <div>未完了のタスク：{props.incomplete}、総タスク数： {props.total}</div>
        </section>
    )
}
export default TaskInfo;