import React from 'react';
import { BsFillBagHeartFill } from 'react-icons/bs';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({product}) => {
  
  const { img, title, star, reviews, newPrice, prevPrice } = product;
  
  return (
    <div className='card'>
      <div className="card-item">
        <div className='card-image-container'>
          <img className='card-img' src={img} alt={title} />
        </div>
        <div className='card-details'>
          <Link to={`/product/${product.title}`} state={{ productTitle: title }} >
            <h3 className='card-title'>{title}</h3>
          </Link>
          <div className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className='total-reviews'>{reviews}</span>
          </div>
            <div className="card-price">
              <div className="price">
                <del className='old-price'>{prevPrice}</del> 
                <span className='current-price'>{newPrice}</span>
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </div>
        </div>
      </div>
  </div>
  )
}

export default Card;