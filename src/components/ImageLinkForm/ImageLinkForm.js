import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, name }) => {
  return (
    <div>
      <p className='white f3'>
        {`${name}: This Magic Brain will detect the ingredients in your food pictures.`}
      </p>
      <p className='white f3'>
        {'Give it a try! Upload a picture:'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
        <input placeholder='Enter image URL' className='f4 pa2 w-70 center' type='text'onChange={onInputChange}/>
        <button 
          className='f4 w-30 grow link ph3 pv2 dib white'
          onClick={onButtonSubmit}
        >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;