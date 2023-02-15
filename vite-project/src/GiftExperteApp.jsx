import React from 'react'
import { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GiftExperteApp = () => {

const [categories, setcategories] = useState(['Sieya'])

const OnAddCategory = ( category ) => {
    setcategories (list => [...list, category])
}
  return (
    <div>
        <h1>
            Expertooooo
        </h1>

        <AddCategory OnAddCategory={OnAddCategory} />
        {
            categories.map(
                (category, key) =>
                {
                    return <GifGrid category={category} key={key}/>
                }
            )
        }
    </div>
  )
}

export default GiftExperteApp