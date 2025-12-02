import { Route,Router ,Routes} from "react-router-dom"
import { Blog } from "./components/Blogs"
import {Home} from './components/Home' 
import {User} from './components/user'
import { Contact } from "./components/contact"
import { Thankyou } from "./components/thankyou"

export const App=()=>{
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Blog/:id" element={<Blog/>} />
    <Route path="users/:id" element={<User/>}/>
    <Route path="products/:id" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/thankyou' element={<Thankyou/>}/>
    
  </Routes>

  </>
}