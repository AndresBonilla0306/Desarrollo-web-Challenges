import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import FirstApp from './FirstApp'
//import { GifGrid } from './components/GifGrid'
import GitExpertApp from './GitExpertApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GitExpertApp/>
  </React.StrictMode>,
)
