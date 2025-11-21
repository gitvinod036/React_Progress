import { InputTag } from './Userinput'
import { Product } from './assets/components/products'
import productdata from './assets/components/productsdata.json'
import Deals from './assets/components/Deals.json'
import Fruitsdata from './assets/components/Fruits.json'
import { Fruits } from './fruitsrender'
import { Student } from './StudentList'

function App() {
  const students = [
    { id: 1, name: "John", grade: "A" },
    { id: 2, name: "Emma", grade: "B" },
    { id: 3, name: "Liam", grade: "C" }
  ];
  return <>
    <InputTag />
    <Product products={productdata} cardtitle="Top Deals" />
    <Product products={Deals} cardtitle="Deals of the Day" />
    <Fruits data={Fruitsdata} title="Fruits list" />
    <Student details={students} title="StudentDetails" />
  </>
}

export default App
