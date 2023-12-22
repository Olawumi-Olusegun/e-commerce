import "./Price.css";
import Input from './../../Input';
import { useState } from "react";
import { useCombinedStore } from "../../../store";



const Price = () => {

  const [checkedValue, setCheckedValue] = useState("");

  const handleButtonClick = useCombinedStore((state) => state.handleButtonClick);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
    handleButtonClick(event.target.value);
  }

  return (
    <div className='ml'>
      <h2 className="price-title price-title">Price</h2>
      <div>
        <Input 
        handleChange={handleChange}
        value=""
        title="All"
        name="price"
         id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value={50}
        title={`N0-N50`}
        name="price"
         id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value={100}
        title={`N50-N100`}
        name="price"
         id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value={150}
        title={`N100-N150`}
        name="price"
         id={checkedValue}
        />
        <Input 
        handleChange={handleChange}
        value={200}
        title={`N150-N200`}
        name="price"
         id={checkedValue}
        />
      </div>

    </div>
  )
}

export default Price