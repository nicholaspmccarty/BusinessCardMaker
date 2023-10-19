import React from 'react';

const dummyOnChange = () => {};

const FormElement = ({ ID, Label, Value }) => {
  const formElementStyle = {
    display: 'block',
    margin: '10px 0', // Add spacing at the top and bottom
  };

  return (
    <label style={formElementStyle}>
      <strong>{Label}</strong>
      <input type="text" name={ID} value={Value} onChange={dummyOnChange} style={formElementStyle} />
    </label>
  );
};

export default FormElement;
