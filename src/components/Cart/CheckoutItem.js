import React from 'react';
import classes from './CheckoutItem.module.css'
import Counter from "../UI/Counter/Counter";

const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.CkoImg}>
                <img src={props.itm.img} alt=""/>
            </div>
            <div className={classes.Dscrp}>
                <h2 className={classes.Title}>{props.itm.title}</h2>
                <div className={classes.PriceOuter}>
                    <div><Counter mealDict={props.itm}/></div>
                    <div className={classes.Price}>{props.itm.amount * props.itm.price}</div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;
