// import React from "react";

// class Footer extends React.Component{
//     render(){
    //     <div style={{ width:"100%" , height:"50px", backgroundColor:"orange"}}>
    //        <ul>
    //         <li>PRODUCTS</li>
    //         <li>OUR STORY</li>
    //         <li>FLAVOURS</li>
    //         <li>LOCATION</li>
    //        </ul>
    //     </div>
    // }
// }

// export default Footer;


function Footer(){
    return  <div style={{ width:"100%" , height:"150px", backgroundColor:"orangered"}}>
           <ul style={{display:"flex" , color:"white" ,padding:"50px 50px",fontSize:"large", gap:"50px", justifyContent:"center"}}>
            <p>PRODUCTS</p>
            <p>OUR STORY</p>
            <p>FLAVOURS</p>
             <p>LOCATION</p>
           </ul>
        </div>
    }
        

export default Footer;