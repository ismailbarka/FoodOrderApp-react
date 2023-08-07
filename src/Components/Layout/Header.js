import React, { Fragment} from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'
import mealsImage from '../../assests/meals.jpg'

const Header = (props) =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table full of good food"></img>
            </div>
        </Fragment>
    )
};

export default Header;