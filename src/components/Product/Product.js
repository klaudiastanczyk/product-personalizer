import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {

   const [currentColor, setCurrentColor] = useState(props.colors[0]);
   const [currentSize, setCurrentSize] = useState(props.sizes[0]);

   const getPrice = () => {
     return props.basePrice + currentSize.additionalPrice
   }

  return (
    <article className={styles.product}>
      <ProductImage alt={props.title} tshirt={props.name} color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize} getPrice={getPrice} sizes={props.sizes} colors={props.colors} title={props.title} />
      </div>
    </article>
  )
};

export default Product;