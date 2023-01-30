
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';


const HeaderCardButton = (props) => {
    return (
        <button className={styles.button} >
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Кошик
            </span>
            <span className={styles.badge}>
                2
            </span>
        </button>
    )
}

export default HeaderCardButton;