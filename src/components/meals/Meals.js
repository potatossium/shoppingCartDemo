import React from 'react';
import Meal from "./meal/Meal";
import classes from "./Meals.module.css"

const Meals = (props) => {

    return (
        // 滚动条设置给了Meals, 而不是默认的body
        <div className={classes.Meals}>
            {props.mealsData.map(item => {
                return <Meal
                    key={item.id}
                    mealDict={item}/>
            })}
        </div>
    );
};

export default Meals;
