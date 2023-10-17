import React from 'react';
import FormElement from './FormElement';


const Form = () => {
  

  return (
    
      <>
        <form>
          {["Name", "Designation", "Phone", "Email"].map((field, key) => (
            <div key={key}>
              <label style={{ display: 'block', marginBottom: '5px' }}>
                <strong>{field}</strong>
                <input type="text" style={{ display: 'block', marginBottom: '15px' }} />
              </label>
            </div>
          ))}
        </form>
      </>
    );
  };
  

export default Form
