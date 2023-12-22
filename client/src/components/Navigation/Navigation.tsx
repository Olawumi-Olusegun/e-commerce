import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Navigation.css";
import { useCombinedStore } from "../../store";
import { MdMenu } from "react-icons/md";

const Navigation = () => {

  const [inputValue, setInputValue] = useState('');

  const updateValue = useCombinedStore((state) => state.updateValue);
  const setOpenSideMenu = useCombinedStore((state) => state.setOpenSideMenu);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    updateValue(newValue)
  };


  const handleSidebarMenu = () => {
    setOpenSideMenu(true);
  }

  return (
    <header>
      <nav>

        <span title="" className='close-btn' onClick={handleSidebarMenu}>
          <MdMenu className="nav-icons" color="black" />
        </span>

        <div className='nav-container'>
          <input onChange={handleInputChange} value={inputValue} type="text" placeholder='search product by name...' className='search-input' />
        </div>

        <div className='profile-container'>
          <a className='icon-btn' href="#" > <FiHeart className="nav-icons" /> </a>
          <a className='icon-btn' href="#" > <AiOutlineShoppingCart className="nav-icons" /> </a>
          <a className='icon-btn' href="#" > <AiOutlineUserAdd className="nav-icons" /> </a>
        </div>

      </nav>
    </header>
  )
}

export default Navigation