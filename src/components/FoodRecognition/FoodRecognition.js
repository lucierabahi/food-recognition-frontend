import React from 'react';


const FoodRecognition = ({ imageURL }) => {
  return (
    <div className='center ma4'>
      <div className='mt2'>
        <img alt='' src={imageURL} width='500px' height='auto'/>
      </div>
    </div>
  );
}

export default FoodRecognition;