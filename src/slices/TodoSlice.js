import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   todos: []
};

const TodoSlice = createSlice({
   name: "TodoSlice",
   initialState: initialState,
   reducers: {
      
      addTodos: (state, action) => {
         state.todos.push(action.payload);
      },

      removeTodos: (state, action) => {
         const newArray = state.todos.filter((item, index) => {
            return index !== action.payload;
         });
         state.todos = newArray;
      },

      updateTodos: (state, action) => {
         state.todos.map((item,index) => {
            if(index === action.payload.id){
               state.todos[index] = action.payload.updated;
            }
         })
      }
   },
});

export const { addTodos, removeTodos, updateTodos } = TodoSlice.actions;
export default TodoSlice.reducer;