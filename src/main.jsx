import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import FirstApp from './FirstApp'
//import { GifGrid } from './components/GifGrid'
//import GitExpertApp from './GitExpertApp'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MultipleCustomHooks/>
  </>,
)
