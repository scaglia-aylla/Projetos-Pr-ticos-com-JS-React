/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import "./task-item.css";


TaskItem.proptypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}

// eslint-disable-next-line react/prop-types
export default function TaskItem({ id, title, taskState, onTaskUpdate, onDeleteTask}) {

    const [isEditing, setEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);

    const onTitleChange = (event) => {
       const newTitle = event.target.value; 
       setEditableTitle(newTitle);
       onTaskUpdate(id, newTitle, taskState);

    }
    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            setEditing(false);
            if(editableTitle.length === 0){
                onDeleteTask(id);
            }
        }
    }
    const onTaskStateChange = (event) => {
        onTaskUpdate(id, title, event.target.value)
    };

    if (isEditing) {
        return (
            <div className="task-item">
                <input 
                    type="text" 
                    value={editableTitle} 
                    onChange={onTitleChange} 
                    onKeyPress={onKeyPress}
                />
            </div>
        )
       
    } else {
        return (
            <div className="task-item">
                <div onClick={(e) => setEditing(true)}>{editableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="Pendente">Pendente</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Completa">Completa</option>
                </select>
            </div>
        )
    }


}