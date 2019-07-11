import React from 'react';
import Food from './Food';


const FoodList = ({ foodList }) => {
  return (
    <div>
      {
        foodList.map((food, i) => {
          return (<Food
            key={foodList[i].id} 
            name={foodList[i].name}
            value={foodList[i].value} 
          />);
        })
      }
    </div>
  );
}

export default FoodList;
