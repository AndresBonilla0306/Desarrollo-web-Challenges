import React from 'react'

const TodoAdd = () => {
  return (
    <>
        <h4>Agregar TODO</h4>
        <hr/>
        <form>
            <input type='text' className='form-control'></input>
            <button className='btnAgregar'>
                Agregar
            </button>
        </form>
    </>
  )
}

export default TodoAdd