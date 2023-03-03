import React, { useState } from 'react'

const categories = ['Salchipapa', 'Pizza']
 

export const GitExpertApp = () =>{

    const [categories, setCategories] = useState([]) 
    const [category, setCategory] = useState('')

    const onAddCategory= () => { 
    setCategories(list=> [...list, category])
    setCategory('')

    }
    const onSetCategory = (evt) =>{
        setCategory(evt.target.value)
    }
    return(
        <>
         <h1>GitExpert</h1> 
         <input  type="text" value={category}
         onChange={(event) => onSetCategory(event)}/>
         <button onClick = {()=> onAddCategory()}>Añadila Boludooooo</button> 
         <ol>
                    {
                        categories.map(
                            (category, key) => 
                            {
                                return <li key={ key }>{category}</li>
                            }
                        )
                    }
                </ol> 
        </>
    )
}



export default GitExpertApp