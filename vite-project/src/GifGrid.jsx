import React, { useEffect } from 'react'

const getGiffs = async( category ) => {
    const url = ''
    const resp = await fetch( url )
    const { data } = await resp.json
    const gifs = data.map( img =>{
        return {
            id: img,id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
  return (
    <div>getGiffs</div>
  )
}


const GifGrid = ({category}) => {

    useEffect(() => {
        console.log(category);
    }, [])

  return (
    <div>
        <h3>{ category}</h3>
        <p> Chale </p>
    </div>
  )
}

export default GifGrid