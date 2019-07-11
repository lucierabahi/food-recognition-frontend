import React from 'react';

const Food = ({ name, value }) => {
  return (
    <div>
        <p className='f3'>{name}{" "}{value}</p>
    </div>
  );
}

export default Food;