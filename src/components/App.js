import React from 'react';
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";
const App = () => {
  return <div clasName="hello"> 
  <header>
    <Header> <h1 class="Dark"> Custom Business Card Generator </h1> </Header>
    </header>
    <main> 
    <Form />
    <Preview />
    </main>
  
  </div>
}

export default App;