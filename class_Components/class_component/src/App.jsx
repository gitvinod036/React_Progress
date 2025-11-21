import { Component } from 'react';
import StudentDetails from './StudentDetails'
import Spiderman from './assets/imaegs/spider.jpeg'
import Prabha from './assets/imaegs/prabhas.jpg'
import ironman from './assets/imaegs/ironman.jpeg'
import jrntr from './assets/imaegs/jrntr.jpeg'
import ant from './assets/imaegs/Ant.jpeg'
import StudentCard from './StudentCard';
import UserDetailsmain from './UserDetailsmain';

export default class App extends Component {
  render() {
    return <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>Student</h1>
        <StudentDetails name="Spiderman" class="BTech" Rollno={76545} imgUrl={Spiderman} hobbies={["Reading", "Swimming", "Dancing"]} />
        <StudentDetails name="Ant man" class="Film " Rollno="9890" imgUrl={ant} hobbies={["Reading", "Swimming", "Dancing"]} />
        <StudentDetails name="Prabhas" class="Telugu Film" Rollno="1800" imgUrl={Prabha} hobbies={["Reading", "Swimming", "Dancing"]} />
        <StudentDetails name="Jr Ntr" class="Telugu Film " Rollno="700" imgUrl={jrntr} hobbies={["Reading", "Swimming", "Dancing"]} ><h6 >Hello CVBN</h6></StudentDetails>
      </div><div>
        <h3>Student Details</h3>
        <StudentCard name="John Doe" Age={22} Course="React" />
        <StudentCard name="Emma Smith" Age={20} Course="Node.js" />
      </div>
      < UserDetailsmain/>
    </div>

  }
}


