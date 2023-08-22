import React, {useContext, useState} from 'react';
import Backdrop from "../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import classes from "./CartDetails.module.css"
import Meal from "../meals/meal/Meal";
import Confirm from "../UI/Confirm/Confirm";

const CartDetails = () => {
    const ctx = useContext(CartContext)
    const [showConfirm, setShowConfirm] = useState(false) // 删除购物车确认框
    const showConfirmHandler = ()=> {
        setShowConfirm(true)
    }
    const ifNo = ()=> {
        setShowConfirm(false)
    }
    const ifYes = ()=> {
        ctx.clearItem()
        setShowConfirm(false)
    }

    return (
        <Backdrop>
            {showConfirm && <Confirm confirmText={"确认清空购物车吗？"} ifNo={ifNo} ifYes={ifYes}/>}
            {/* event.stopPropagation () 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。*/}
            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>商品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {ctx.items.map(item => {
                        return <Meal
                            key={item.id}
                            mealDict={item}/>
                    })}
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;
