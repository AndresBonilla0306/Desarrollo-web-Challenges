import React from 'react'
import { useState } from 'react'

const Input = () => {

    const [categories, setCategories] = useState(['first category'])
    const [category, setCategory] = useState('')

    const onAddCategory = () => {
        setCategories(list => [...list, category])
        setCategory('')
    }

    //const onSetCategory = (evt) => {
    //    setCategory(evt.target.value)
    //}



    return (
        <div>
            <input type="text" value={category}
                onChange={(event) => onSetCategory(event)}></input><br></br>
            <button onClick={() => onAddCategory()}> Agregala Boludo</button><br></br>
            <button onClick={(event) => deleteCategory(event)}>Borralo Boludo</button>
            <ol>
                {
                    categories.map(
                        (category, key) => {
                            return <li key={key}> {category}</li>
                        }
                    )
                }
            </ol>
        </div>
    )
}

export default Input