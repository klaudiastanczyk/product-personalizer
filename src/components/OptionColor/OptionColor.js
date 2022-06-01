import clsx from 'clsx';
import styles from './OptionColor.module.scss'

const OptionColor = props => {
  return (
    <ul className={styles.choices}>
        {props.colors.map(color => <li key={color}>
          <button className={
            clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()] ,props.currentColor === color && styles.active)} onClick={e => {
              e.preventDefault();
              props.setCurrentColor(color);
            }}>
              </button>
              </li>)} 
      </ul>
  )
}

export default OptionColor;