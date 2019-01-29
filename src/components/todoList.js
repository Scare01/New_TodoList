import React from 'react'
import Todo from './todo'

let TodoList = ({ todos }) => (
  {todos.map(todo => {
    <Todo todo={todo} />
  })}
)