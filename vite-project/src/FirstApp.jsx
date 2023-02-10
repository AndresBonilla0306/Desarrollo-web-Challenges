import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
//const title = 'Salchipapa'

const FirstApp = ({ title, sum, value }) => {
    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 2500000000)
    }

    return (
        <div>
            <h1> {title} </h1>
            <span>{sum}</span><br></br>
            <img src="https://play-lh.googleusercontent.com/Wug4uc-Hgv6Tkq7_IMaYod-cf7WdjSh3esPEA7I-aLtG9FP628XfWKZMA12SjKZ1D3w" className='Uganda'></img><br></br>
            <h1> Estos son los penes que se come Sebas</h1>
            <span className='Sebas'> {counter} </span><br></br>
            <button onClick={() => handleAdd()}> +1 </button>
        </div>

    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    sum: 69
}
export default FirstApp