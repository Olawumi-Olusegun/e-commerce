import React, { useState } from 'react'
import "./Category.css"
import Input from './../../Input';
import { useCombinedStore } from '../../../store';


const Category = () => {

  const [checkedValue, setCheckedValue] = useState("");

  const handleButtonClick = useCombinedStore((state) => state.handleButtonClick);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
    handleButtonClick(event.target.value);
  }


  return (
    <div className='category'>
      <h2 className='category-title'>Category</h2>
      <div>
        <Input 
        handleChange={handleChange}
        value=""
        title="All"
        name="category"
        id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="category"
        id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="category"
        id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="category"
        id={checkedValue}
        />
      </div>
    </div>
  )
}

export default Category