
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id)
    }

    const addCArtItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem 
                        key={item.id} 
                        name={item.name} 
                        price={item.price} 
                        amount={item.amount}
                        onAdd={addCArtItemHandler.bind(null, item)}
                        onRemove={removeCartItemHandler.bind(null, item.id)}
                >{item.name}</CartItem>
            ))}
        </ul>
    );

    return (
        <Modal onHideCard={props.onHideCard}> 
            {cartItems}
            <div className={styles.total}>
                <span>Отже</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCard}>Закрити</button>
                {hasItems && <button className={styles.button} >Замовити</button>}
            </div>
        </Modal>
    )
}

export default Cart;