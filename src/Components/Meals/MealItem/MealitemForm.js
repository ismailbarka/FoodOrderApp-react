import Input from '../../UI/Input';
import classes from './MealitemForm.module.css'
import { useRef, useState } from 'react';

const MealitemForm = (props) =>{

    const [amountIsvalude, setAmountIsvalide] = useState(true);
    const amountUseRef = useRef('0')
    const submitHandler = event =>{
        event.preventDefault();
        const entredAmount = amountUseRef.current.value;
        const entredAmountNumber = +entredAmount;
        if(entredAmount.trim().lenght === 0 || entredAmountNumber < 1 || entredAmountNumber > 5){
            setAmountIsvalide(false);
            return ;
        }
        props.onAddToCart(entredAmountNumber);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amoubt" 
                    ref={amountUseRef}    
                    input={{
                        id: 'Amount_'+ props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
            }}></Input>
            <button>+ ADD</button>
            {!amountIsvalude && <p>please enter a valide amount</p>}
        </form>
    )
} 

export default MealitemForm;