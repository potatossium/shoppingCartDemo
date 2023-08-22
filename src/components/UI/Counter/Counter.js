import React, {useContext} from 'react';
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import CartContext from "../../../store/cart-context";

// 计数器组件
const Counter = (props) => {
    const ctx = useContext(CartContext)
    // 添加购物车按钮处理函数
    const removeButtonHandler = ()=>{
        ctx.removeItem(props.mealDict)
    }
    const addButtonHandler = ()=>{
        ctx.addItem(props.mealDict)
    }
    return (
        <div className={classes.Counter}>
        {
            (props.mealDict.amount && props.mealDict.amount !== 0) ? (
            <>
                <button
                    onClick={removeButtonHandler}
                    className={classes.Sub}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className={classes.count}>{props.mealDict.amount}</span>
            </>) : null
        }
            <button
                onClick={addButtonHandler}
                className={classes.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;


/*
*   引入fontawesome步骤
* --安装依赖
*   npm i --save @fortawesome/fontawesome-svg-core
*   npm i --save @fortawesome/free-solid-svg-icons
*   npm i --save @fortawesome/free-regular-svg-icons
*   npm i --save @fortawesome/react-fontawesome@latest
* --引入图标
*   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
*   import { faPlus } from '@fortawesome/free-solid-svg-icons'
*
* */
