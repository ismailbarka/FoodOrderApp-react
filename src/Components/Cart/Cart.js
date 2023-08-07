
import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../Store/Cart-Context';
import CartItem from './CartItem';

const Cart = (props) =>{
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id =>{
    };
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item, amount: 1})
    };
    const cartitems = <lu className={classes.cartItems}>
        {cartCtx.items.map((item, index) =>(
            <CartItem key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)}></CartItem>
        ))}
    </lu>

    return(
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;