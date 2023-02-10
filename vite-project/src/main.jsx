import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirstApp from './FirstApp'
import Categories from './Categories'
import Input from './Input'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp value={2} />
    <Categories />
    <Input />
  </React.StrictMode>,
)
