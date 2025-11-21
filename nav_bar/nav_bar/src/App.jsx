import './App.css'

function App() {
  let name="vinod"
  let num="101"
  const obj={name:"Vinod",Age:22}
  const arry=["Hi",6,true]
  return<div>
    <div class="parent">
  <nav class="nav_ele">
    <a href="" class="nav_eles">Home</a>
    <a href="main" class="nav_eles">Main</a>
    <a href="About" class="nav_eles">About</a>
    <a href="Contact" class="nav_eles">Contact</a>
  </nav>
  </div>
  <div id="child"> 
     <p>Hello {name}</p>
     <p>Your ID Number is {num}</p>
      <p>Your are  :{obj.name}</p>
      <p>Your Age is : {obj.Age}</p>
      <p>{arry[0]}</p>
      <p>{arry[1]}</p>
      <img src="https://thumbs.dreamstime.com/b/lonely-elephant-against-sunset-beautiful-sun-clouds-savannah-serengeti-national-park-africa-tanzania-artistic-imag-image-106950644.jpg"></img>
  </div>
  </div>
  
}

export default App
