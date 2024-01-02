import { BsFillBagHeartFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import data from "../../db/data";
import "./SingleProduct.css";

export default function SingleProduct() {

  const { state: { productTitle } } = useLocation();

  const product = data.filter((product) => product.title === productTitle);
  const { img, title, star, reviews, newPrice, prevPrice } = product[0];

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
            <button className="btn" style={{backgroundColor: "green", color: "white"}}>Green</button>
            <button className="btn" style={{backgroundColor: "red", color: "white"}}>Red</button>
          </div>
        </div>
        <div className="product-size">
        <h4 className="product-title"> Sizes </h4>
        <div className="size-container">
          <button className="btn">LG</button>
          <button className="btn">XXL</button>
        </div>
        </div>
      </div>
    </div>
  )
}
