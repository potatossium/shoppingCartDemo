import React, {useContext} from 'react';
import ReactDOM from 'react-dom'
import classes from './Checkout.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import CheckoutItem from "./CheckoutItem";

const Checkout = (props) => {
    const checkOutRoot = document.getElementById("checkout-root")
    const ctx = useContext(CartContext)

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.XMark}>
                <FontAwesomeIcon icon={faXmark} onClick={ () => {props.onHide()} }/>
            </div>
            <div className={classes.FoodDetail}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                </header>
                <div className={classes.ListArea}>
                    {ctx.items.map(item=><CheckoutItem key={item.id} itm={item}/>)}
                </div>
            </div>
            <footer className={classes.Footer}>
                <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
            </footer>
        </div>
    , checkOutRoot);

};

export default Checkout;
