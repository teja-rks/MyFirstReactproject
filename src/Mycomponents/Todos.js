import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let mystyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
  return (
    <div className='container' style={mystyle}>
        <h3 className=' my-3'>TODO'S  LIST</h3>
        {props.todos.length===0?"no to do's to display":
        props.todos.map((todo)=>{
            return<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
         })
    }
    </div>
  )
}
