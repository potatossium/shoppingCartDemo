import React, {useContext, useEffect, useState} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails";
import Checkout from "./Checkout";

const Cart = () => {
    const ctx = useContext(CartContext)
    const [showDetails, setShowDetails] = useState(false) // 购物车详情状态 - 是否显示
    const [showCheckout, setShowCheckout] = useState(false) // 结算页面状态

    /* 1. setState()在函数体中直接调用 ×
    if(ctx.totalAmount===0) { setShowDetails(false)} // Effect ex. 修改state会触发组件重新渲染 - 死循环
    state值一样不触发重新渲染？setState执行流程：dispatchSetState()-->先判断阶段：
    渲染阶段: 不判断state值是否相同，都会渲染;
    非渲染阶段：state值未改变不重新渲染
    */
    /* 2. setTimeOut ✔
        setTimeout(()=>{ // 稍后调用；将setState放在setTiemout函数中，
            if(ctx.totalAmount===0) { setShowDetails(false)}
        }, 0)
    * */
    // 3. useEffect(func, []): 传入的函数参数在组件渲染完毕后调用
    // useEffect第二个参数是依赖项列表，只有当依赖项发生变化时useEffect才被触发
    // 若deps = []空数组, useEffect只在组件初始化时候触发一次
    // useState每次调用会确保返回相同的setState()对象，是否添加到deps没关系
    useEffect(()=>{
        if(ctx.totalAmount===0) { setShowDetails(false) }
    }, [ctx, setShowDetails])

    const toggleDetails = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false)
            return
        }
        setShowDetails(prevState => !prevState)
    }
    const checkoutHandler = () => {
        if (ctx.totalAmount === 0) return;
        setShowCheckout(prevState => !prevState)
    }
    const hideCheckoutHandler = () => { setShowCheckout(false) }

    return (
        <div className={classes.Cart} onClick={toggleDetails}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
            {showDetails && <CartDetails/>}
            <div className={classes.Icon}>
                <img src={iconImg} alt=""/>
                {ctx.totalAmount===0 ? null : <span
                    className={classes.TotalAmount}>{ctx.totalAmount}</span>
                }
            </div>
            <p className={classes.Price}>{ctx.totalPrice}</p>
            <button
                onClick={checkoutHandler}
                className={`${classes.Button} ${ctx.totalAmount===0 ? classes.Disabled : ''}`}>结算</button>
        </div>
    );
};

export default Cart;
