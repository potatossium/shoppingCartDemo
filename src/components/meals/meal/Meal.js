import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";

const Meal = (props)=>{
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.mealDict.img} alt=""/>
            </div>
            <div>
                <h2 className={classes.Title}>{props.mealDict.title}</h2>
                <p className={classes.Desc}>{props.mealDict.desc}</p>
                <div className={classes.PWrapper}>
                    <span className={classes.P}>{props.mealDict.price}</span>
                    <Counter
                        mealDict={props.mealDict}/>
                </div>
            </div>
        </div>
    )
}

export default Meal;
