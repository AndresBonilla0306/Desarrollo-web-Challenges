import React from 'react'
import { useReducer } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { TodoReducer } from './TodoReducer'

const initialState = [ {
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp =() => {
    const [todos, dispatchTodo] = useReducer(TodoReducer , initialState);

     const handleNewTodo = ( todo ) => {
        const action ={
            type: '[TODO] ADD TODO', 
            payload: todo 
        }
        dispatchTodo(action)
     }

    return (
    <>
        <h1>TodoApp: 10, <small>Pendietes: 2 </small> </h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList todos={ todos} />
            </div>
            <div className='col-5'>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>)
}