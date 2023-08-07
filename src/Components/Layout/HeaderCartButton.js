import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../Store/Cart-Context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) =>{
    const cartCnt = useContext(CartContext);

    console.log(cartCnt);

    const numberOfCartItems = cartCnt.items.reduce( (number, item) =>{
        return number + item.amount;
    },0);
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;