import React, { useState } from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../db/data";
import "./SingleProduct.css";

export default function SingleProduct() {

  const navigation = useNavigate();

  const { state: { productTitle } } = useLocation();

  const product = data.filter((product) => product.title === productTitle);
  const { img, title, star, reviews, newPrice, prevPrice } = product[0];

  const [responseMessage, setResponseMessage] = useState("");

  const [productState, setProductState] = useState({
    title: title ?? "",
    price: prevPrice ?? "",
    size: "",
    color: "",
  });


  const handleColorChange = (color: string) => {
    setProductState((prevState) => ({...prevState, color }))
  }

  const handleSizeChange = (size: string) => {
    setProductState((prevState) => ({...prevState, size }))
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`/api/v2/`, {
        method: "POST",
        body: JSON.stringify(productState),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const { message } = await response.json();

      if(!response.ok) {
        setResponseMessage(message)
      }

      navigation("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="single-product-container">
      <div className="left-column">
        <div className="image-container">
          <img className="product-image" src={img} alt={`product-image-${title}`} />
        </div>
      </div>
      <div className="right-column">
        <h2 className="product-title"> {title} </h2>
        <div className="product-price">
            <div className="price">
              <del className='old-price'> {prevPrice} </del> 
              <span className='current-price'> ${newPrice} </span>
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
        </div>
        <div className="product-color">
          <h4 className="product-title"> Colors </h4>
          <div className="color-container">
            <button onChange={() => handleSizeChange("Green".toLocaleLowerCase())} className="btn" style={{backgroundColor: "green", color: "white"}}>Green</button>
            <button onChange={() => handleSizeChange("Red".toLocaleLowerCase())} className="btn" style={{backgroundColor: "red", color: "white"}}>Red</button>
          </div>
        </div>
        <div className="product-size">
        <h4 className="product-title"> Sizes </h4>
        <div className="size-container">
          <button className="btn" onChange={() => handleColorChange("LG".toLocaleLowerCase())}>LG</button>
          <button className="btn" onChange={() => handleColorChange("XXL".toLocaleLowerCase())}>XXL</button>
        </div>
        </div>
        <div className="product-size">
        <div className="size-container">
          <button type="submit" className="btn" onChange={handleSubmit}>Submit</button>
        </div>
        </div>
      </div>
    </div>
  )
}
