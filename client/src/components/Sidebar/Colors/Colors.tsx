import React, { useState } from 'react'
import Input from './../../Input';
import { useCombinedStore } from '../../../store';
import "./Colors.css";


const Colors = () => {

  const [checkedValue, setCheckedValue] = useState("");

  const handleButtonClick = useCombinedStore((state) => state.handleButtonClick);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
    handleButtonClick(event.target.value);
  }

  return (
    <div className='ml'>
      <h2 className="color-title color-title">Color</h2>
      <div>
        <Input 
        handleChange={handleChange}
        value=""
        title="All"
        name="color"
         id={checkedValue}
        color="all"
        />
        <Input 
        handleChange={handleChange}
        value="black"
        title="Black"
        name="color"
         id={checkedValue}
        color="black"
        />
        <Input 
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="color"
         id={checkedValue}
        color="blue"
        />
        <Input 
        handleChange={handleChange}
        value="red"
        title="Red"
        name="color"
         id={checkedValue}
        color="red"
        />
        <Input 
        handleChange={handleChange}
        value="green"
        title="Green"
        name="color"
         id={checkedValue}
        color="green"
        />
        <Input 
        handleChange={handleChange}
        value="white"
        title="White"
        name="color"
         id={checkedValue}
        color="white"
        />
      </div>
    </div>
  )
}

export default Colors