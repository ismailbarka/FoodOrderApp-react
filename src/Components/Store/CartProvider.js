import CartContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartSate = {
    items: [],
    totalAmount: 0
};

const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const exestingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const exestingCartItem = state.items[exestingCartItemIndex];
        let updatedItems;
        
        if(exestingCartItem){
            const updatedItem ={
                ...exestingCartItem,
                amount: exestingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[exestingCartItemIndex] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE')
    {
        const exestingCartItemIndex = state.item.findIndex(
            item => item.id === action.item.id
        );
    }
    return state;
};

const CartProvider = (props) => {
    const [cartState, dispachCartAction] = useReducer(CartReducer, defaultCartSate);
    const addItemToCartHandler = (item) => {
        dispachCartAction({ type: 'ADD', item: item });
    };

    const removeitemFromCartHandler = (id) => {
        dispachCartAction({ type: 'REMOVE', id: id });
    };

    console.log(cartState)

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeitemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;