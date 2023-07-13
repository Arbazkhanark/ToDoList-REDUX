import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, todoAdd } from '../Redux/action/todoAction';
import "../App.css"

const Todo = () => {
    const dispatch=useDispatch();
    const todoList=useSelector((state)=>state)
    const [task,setTask]=useState({
        newTask:"",
        time:""
    });
    
    function handleChange(e){
        setTask({...task,[e.target.id]:e.target.value})
    }
    function addTask(){
        console.log(task);
        // setTask(dispatch({type:"ADD",payload:task}))
        dispatch(todoAdd(task));
    }
  return (
    <div>
        <h1>ToDo List</h1>
        <input onChange={handleChange} type='text' placeholder='Enter Task' id="newTask" required /> <br />
        <input type='time' id="time" onChange={handleChange} required />
        <button onClick={addTask}>Add Task</button>

        {todoList.map((item,i)=>{
            return (
                <div className='list' key={i}>
                    <p>{i+1}. {item.newTask}------------{item.time}</p>
                    <button onClick={()=>dispatch(deleteItem(i))}>Remove</button>
                </div>
            ) 
        })}
    </div>
  )
}

export default Todo