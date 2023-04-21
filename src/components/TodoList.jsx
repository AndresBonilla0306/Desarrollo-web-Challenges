import React from 'react'

const TodoList = () => {
  return (
    <>
      <ul className='list-group'>
        <li className='list-group-item'>
          <span className='span'> Item 1</span>
          <button className='btnBorrar'>Borrar</button>
        </li>
      </ul>
    </>
  )
}

export default TodoList
