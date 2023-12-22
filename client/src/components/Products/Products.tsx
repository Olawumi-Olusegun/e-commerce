import { Card } from '..';
import { Product } from '../../types';
import { useCombinedStore } from '../../store';
import './Products.css';


const Products= () => {

  const products = useCombinedStore((state) => state.products);

  return (
    <section className='card-container'>
      {products && products.map((product: Product, index: number) => <Card key={index} product={product} />) }
    </section>
  )
}

export default Products