import React from 'react';
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";
import { useState } from 'react';

const App = () => {
const[Name, setstate] = useState("Name");
const[Phone, setphone] = useState("Phone")
const[Designation, setdesignation] = useState("Designation")
const[Email, setemail] = useState("Email");
const Values = {
 Name,
 Designation,
 Phone,
 Email
}
  return <div clasName="hello"> 
  <header>
    <Header> <h1 class="Dark"  > Custom Business Card Generator </h1> </Header>
    </header>
    <main> 
    <Form Values={Values}/>
    <Preview />
    </main>
  
  </div>
}

export default App;