import clsx from 'clsx';
import styles from './OptionSize.module.scss'

const OptionSize = props => {
  return (
    <ul className={styles.choices}>
        {props.sizes.map(size =>
           <li key={size.name}><button className={
             clsx(props.currentSize.name === size.name && styles.active)} onClick={ e =>{
               e.preventDefault();
               props.setCurrentSize(size);
             }}>
               {size.name}
               </button>
               </li>)}
      </ul>
  )
}

export default OptionSize;