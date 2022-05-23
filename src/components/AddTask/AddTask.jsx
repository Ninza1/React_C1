import React,{useState} from "react";
import { Task } from "../Task";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [input, setInput] = useState('');
  const[items, setItems] = useState ([])

  const itemsEvents = (event) =>{
    setInput(event.target.value)
  }

  const listOfItems = ()=>{
    setItems((oldItems)=> {
      return [...oldItems, input]

    })
    setInput("")    
  }

  const deleteItems =(id) =>{
    console.log("Yes")
   setItems((oldItems) =>{
     return oldItems.filter((arrElem, index) =>{
       return index !== id;
     })
   })
    
    
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"  placeholder="Add to itmes"   onClick={itemsEvents} required/>
      <button data-cy="add-task-button" onClick={listOfItems}>+</button>
       <ol>
       { items.map((itemval, index) => {
        return <Task  key = {index} 
        id = {index} 
        text = {itemval}
        onSelect ={deleteItems}/>
      })} 
      </ol>
    </div>
  );
};

export default AddTask;
