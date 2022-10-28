import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos, updateTodos } from './slices/TodoSlice'

const Todo = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.todo.todos);

  const [input, setInput] = useState("");
  const [editID, setEditID] = useState("");
  const [find, setFind] = useState(0);
  const [change, setChange] = useState("")
  const [check, setcheck] = useState(true);
  const [filter, setFilter] = useState("");

  const add = () => {
    if (input) {
      dispatch(addTodos(input));
      setInput("");
      setcheck(true);
      setFind(-1);
    }
  };

  const search = (e) => {

    setFilter("");
    const temp = e.target.value
    setFind(temp);
    if (show[temp] !== undefined) {
      setcheck(false);
    }
    else {
      setcheck(true);
    }
  }
  // console.log(show[find])
  // console.log(filter);
  // console.log(right + "right");

  const filterTodo = () => {
    const a = show.indexOf(filter);
    if (a === -1) {
      setcheck(true);
      setFilter("");
      alert("Sorry no such todo found....")
    } else {
      setFind(a);
      setcheck(false);
    }
  }

  const remove = (index) => {
    setcheck(true);
    setFind(-1);
    dispatch(removeTodos(index));
  };

  const edit = (index) => {
    const editedItem = show.find((item, id) => {
      return id === index;
    });

    setChange(editedItem);
    setEditID(index)
  };

  const editItem = () => {
    dispatch(updateTodos({ id: editID, updated: change }));
  }
  return (
    <>
      <h3 className="text-center mt-5">Simple Todo App</h3>
      <div className="main mt-5">
        <div className="inputValue mb-4">
          <input
            placeholder="Enter todo"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="button" className="btn btn-primary" onClick={add}>
            Add item
          </button>
        </div>

        <div className="setValue">
          <div className="search">
            <select value={find} onChange={(e) => search(e)} className="form-select">
              <option value="-1">Select</option>
              {
                show.map((item, index) => {
                  return (
                    <option key={index} value={index}>{item}</option>
                  )
                })
              }
            </select>

            <input type="text"
              value={filter}
              onChange=
              {(e) => {
                setFilter(e.target.value)
                setFind(-1);
                setcheck(true);
              }
              }
              placeholder="Search todos" />

            <button type="button" onClick={filterTodo} className="btn btn-success">
              Search
            </button>
          </div>
          {
            (show.length > 0) &&
            (check ? (
              show.map((item, index) => {
                return (
                  <div key={index} className="mb-2 mt-2 display pb-3">
                    <h5>{item}</h5>
                    <div>
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => edit(index)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                );
              }
              )
            ) :
              <div className="mb-2 mt-2 display pb-3">
                <h5>{show[find]}</h5>
                <div>
                  <button
                    type="button"
                    onClick={() => remove(find)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => edit(find)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )
          }
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Edit Todo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input
                    placeholder="Enter todo"
                    type="text"
                    onChange={(e) => setChange(e.target.value)}
                    value={change}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" onClick={editItem} className="btn btn-primary" data-bs-dismiss="modal">Done Editing</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
