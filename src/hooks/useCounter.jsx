import React from "react";
import { useState, useEffect } from 'react'

export const useCounter = (value) => { 

    const  [counter, setCounter] = useState( value )
  
    const handleAdd = () => {
      console.log('LlmarHandle')
      setCounter( counter + 1)
    }
  
    const handleSubstract = () => {
      console.log('llamando handleSubstract')
      setCounter(counter - 1)
  }
  
  const handleReset = () => {
      console.log('llamando handleReset')
      setCounter(value * 0)
  }
  
    return {
        counter,
        increment: handleAdd,
        decrement: handleSubstract,
        reset: handleReset,
      /*<>
          <h1>Contador</h1>
          <span> { counter } </span><br></br>
          <button onClick={() => handleAdd() }> +1 </button>
          <button onClick = {()=> handleSubstract()}>-1</button>
          <button onClick = {()=> handleReset()}>Reiniciar</button>
      </>*/
    }
  }
  
  /*useCounter.proptypes = {
    value: PropTypes.number.isRequired
  }
  useCounter.defaultProps = {
    value: 1
  }¨*/
  