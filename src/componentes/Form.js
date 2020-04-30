import React from 'react';
import Inputs from '../componentes/Inputs';

const Form = (props) => {
  const { children } = props;
  return (
    <div>
      {children.map((value) => <Inputs key={value.id} attributes={value} />)}
    </div>
  );
};

export default Form;