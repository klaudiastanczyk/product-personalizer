import styles from './ProductImage.module.scss';

const ProductImage = props => {

  return(
    <div className={styles.imageContainer}>
      <img 
        className={styles.image}
        alt={props.alt}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.tshirt}--${props.color}.jpg`} />
  </div>
  )
}

export default ProductImage