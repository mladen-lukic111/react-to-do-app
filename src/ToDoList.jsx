import React, {useState} from 'react';

function ToDoList() {

    

    const [tasks, setTasks] = useState([]);

    const[newTask, setNewTask] = useState("");


    // Pisemo funkcije za updateovanje taskova

    // Fja za hendlovanje input promene 

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    // Funkcija za dodavanja taska

    function addTask() {

        if (newTask.trim() !== "") {

        setTasks(t => [...t, newTask]);
        setNewTask("");

        }
        
    }

    // Funkcija za brisanje taska
    // Mora sadrzati index da bi znali koji task brisemo

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index );
        setTasks(updatedTasks);
    }

    // Funkcija da pomeri task gore
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

     // Funkcija da pomeri task dole
     function moveTaskDown(index) {
        if(index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
     }
 


    return(
        <div className='todo-container'>
            <h1>To Do List</h1>

            <input type="text" 
                   placeholder='Enter your task'
                   value={newTask}
                   onChange={handleInputChange}
            />

            <button className='add-btn'
                    onClick={addTask}>
                    Add
            </button>

            <ol>
                {tasks.map((task, index) => <li key={index}><span className='text'>{task}</span>
                <button className='delete-btn' onClick={() => deleteTask(index)}>Delete task</button>

                <button className='move-btn' onClick={() => moveTaskUp(index)}>👆</button>

                <button className='move-btn' onClick={() => moveTaskDown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
          );
}

export default ToDoList