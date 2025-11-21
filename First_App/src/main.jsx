import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Car from './App'
import {App} from './components'
import New_app from './components'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car/>
    <App/>
    {/* <App></App> */}
    <New_app/>
  </StrictMode>,
)

