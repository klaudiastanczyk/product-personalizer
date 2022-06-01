import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';


const ProductOptions = props => {
  return (
    <form>
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
    </div>
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
    </div>
    <Button className={styles.button} click={e => {
      e.preventDefault();
      console.log('Summary');
      console.log('=========');
      console.log('Name:', props.title);
      console.log('Price:', props.getPrice());
      console.log('Size:', props.currentSize.name);
      console.log('Color:', props.currentColor);
    }}>
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
  )
}

export default ProductOptions;
