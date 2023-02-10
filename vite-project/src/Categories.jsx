import React from 'react'

const categories = ['first category', 'second category']
const Categories = () => {
    return (
        <div>
            <h1>GitExpert</h1>
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

export default Categories