import { Component } from "react";


export class Divi extends Component{
 image_text = [{
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

    render(){
        return <div>
            <h1>Hello</h1>
            {this.image_text.map((value,index)=>
            <div key={index}>
                <img src={value.img} width={150} height={150}/>
                <p>{value.text}</p>
            </div>
                )}

        </div>
    }
}