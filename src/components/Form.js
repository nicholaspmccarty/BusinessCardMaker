import React from 'react';
import FormElement from './FormElement';


const Form = () => {
  

  return (
     <>
      <form>
      <h2> Enter your details</h2>
      <label style={{ display: 'block', marginBottom: '5px' }}>
          <strong>Name</strong>
          <input type="text" style={{ display: 'block',  marginBottom: '15px'}} />
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <strong>Designation</strong>
          <input type="text" style={{ display: 'block', marginBottom: '15px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <strong>Phone</strong>
          <input type="text" style={{ display: 'block', marginBottom: '15px'}} />
        </label>
      </form>
    </>
    
    
  );
  
};

export default Form
