import React, { useState } from 'react'
import './day1t2.css'

const Day1t2 = () => {

   const [state, setState] = useState({ title: "", description: "" });
   const handleChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const initialState = [
      { title: "", description: "" },
   ];

   const [todo, setTodo] = useState(initialState);

   const add = () => {
      setTodo(current => [...current, state]);
      console.log(state.title)
      // setState(prev => ({...prev, title: ""}));
   };

   const remove = (index) => {
      const newitems = todo.filter((item, id) => {
         return id !== index;
      });
      setTodo(newitems);
   };

   const edit = (index) => {
      const editedItem = todo.find((item, id) => {
         return id === index;
      });

      // setInput(editedItem);
      document.getElementById('btn1').style.display = "none"
      document.getElementById('btn2').style.display = "inline"
      // setEditID(index)
   };

   return (
      <>
         <div className='main_2 text-center'>
            <div className='input_value2'>
               <h3>Todo app</h3>
               <input
                  placeholder='Title here'
                  value={todo.title}
                  type="text"
                  onChange={handleChange}
                  name="title"
               />
               <textarea
                  placeholder='Description'
                  value={todo.description}
                  type="text"
                  rows="8"
                  onChange={handleChange}
                  name="description"
               />
            </div>

            <button id='btn1' onClick={add} className="addbtn btn btn-primary">Add todo</button>
            <button id='btn2' className="btn btn-warning">Edit</button>

            <div className='show my-4 text-start'>

               {todo.slice(1).map((element, index) => {
                  return (
                     <div className='showed' key={index}>
                        <h4>{element.title}</h4>
                        <p>{element.description}</p>
                        <button
                           type="button"
                           onClick={() => remove(index)}
                           className="btn btn-danger"
                        >
                           Delete
                        </button>
                        <button
                           type="button"
                           onClick={() => edit(index)}
                           className="btn btn-warning"
                        >
                           Edit
                        </button>
                     </div>

                  );
               })}
            </div>
         </div>
      </>
   )
}

export default Day1t2