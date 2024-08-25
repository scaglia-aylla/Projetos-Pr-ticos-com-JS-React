import PropTypes from "prop-types"
import "./tasklist.css"
import TaskItem from "../TaskItem/TaskItem"
import plusIcon from "../../img/icon+.png"


Tasklist.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}

// eslint-disable-next-line react/prop-types
export default function Tasklist({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeletetask}){
    
    const addTask = () => {
        onAddTask('Nova Tarefa', taskState);
    };

    return(
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return (
                        <TaskItem 
                        key={task.id} 
                        id={task.id} 
                        title={task.title} 
                        taskState={task.state}
                        onTaskUpdate={onTaskUpdate}
                        onDeletetask={onDeletetask} 
                        />
                    )
                })}
                {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
                <button onClick={addTask} className="btn">
                    <img src={plusIcon} alt="adiciona tarefa" />
                    Adicionar Tarefa
                </button>
            </div>
           
        </div>
    )
}