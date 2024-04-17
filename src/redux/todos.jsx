import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload.id)
        },
        toggleEdit: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload.id);
            if (todo) {
              todo.isEditing = !todo.isEditing;
            }
        },
        updateTodoText: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload.id);
            if (todo) {
              todo.text = action.payload.text;
              todo.isEditing = false;
            }
          },
    }
})

export const {addTodo, removeTodo, toggleEdit, updateTodoText} = todoSlice.actions;

export default todoSlice.reducer