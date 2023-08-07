import classes from './Mealitem.module.css'
import MealitemForm from './MealitemForm';
import CartContext from '../../Store/Cart-Context';
import { useContext } from 'react';

const Mealitem = (props) =>{
    const CartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) =>{
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description} >{props.description}</div>
                <div>{price}</div>
            </div>
            <div>
                <MealitemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default Mealitem;