// export const Fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// {Fruits.map((item,index)=>
//   <ul key={index}>
//      <li>{item}</li>
//      <li>{item}</li>
//      <li>{item}</li>
//      <li>{item}</li>
//      <li>{item}</li>
//   </ul>
// )}

// function App() {
//   const students = [
//   { id: 1, name: "John", grade: "A" },
//   { id: 2, name: "Emma", grade: "B" },
//   { id: 3, name: "Liam", grade: "A" },
//   { id: 4, name: "Olivia", grade: "C" },
// ];
//   return <>
//   {students.map((val,ind)=>
//   <table cellPadding="15px"  cellSpacing="0px" border="2px solid black">
//     <tr>
//     <th>Id</th>
//     <th>Name</th>
//     <th>Grade</th>
//    </tr>
//    <tr key={ind}>
//       <td>{val.id}</td>
//       <td>{val.name}</td>
//       <td>{val.grade}</td>
//     </tr>
//   </table>)}
//   </>
// }

const image_text = [{
  img: "https://food-mart-template.vercel.app/images/icon-bread-herb-flour.png",
  text: "Food&Vege"
},
{
  img: "https://food-mart-template.vercel.app/images/icon-bread-baguette.png",
  text: "Bread"
},
{
  img: "https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png",
  text: "Wine"
},
{
  img: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
  text: "Food&Verge"
},
{
  img: "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
  text: "Drumsticks"
},
{
  img: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
  text: "Brococoli"
}
];
import {Divi} from './div'
function App() {
  const image_text = [{
    img: "https://food-mart-template.vercel.app/images/icon-bread-herb-flour.png",
    text: "Food&Vege"
  },
  {
    img: "https://food-mart-template.vercel.app/images/icon-bread-baguette.png",
    text: "Bread"
  },
  {
    img: "https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png",
    text: "Wine"
  },
  {
    img: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
    text: "Food&Verge"
  },
  {
    img: "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
    text: "Drumsticks"
  },
  {
    img: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
    text: "Brococoli"
  }
  ];

  //   return (<div>
  //     <h2>Divs</h2>
  //     {image_text.map((value, element) => {
  //       <div key={element}>
  //         <img src={value.img} width={150} height={150}/>
  //         <p>{value.text}</p>
  //       </div>
  //     })}
  //   </div>)
  // }
  return (
    // <div>
    //   <h2>Divs</h2>
    //   {image_text.map((value, element) => (
    //     <div key={element}>
    //       <img src={value.img} width={150} height={150} alt={value.text} />
    //       <p>{value.text}</p>
    //     </div>
    //   ))}
    // </div>
    <>
    <Divi/>
    </>
  );
}

export default App;