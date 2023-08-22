import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState('')

    useEffect(()=>{
        // 需要添加clearTimeout()清理每一个在渲染阶段创建的定时器
        const timer = setTimeout(()=>{
            console.log('onFilter触发！')
            props.onFilter(keyword)
        },1000)

        // useEffect函数中可以指定函数作为返回值
        // 可以作为清理函数，在下次useEffect前被调用
        return ()=>{
            clearTimeout(timer)
        }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[keyword])

    const inputChangeHandler = e => {
        setKeyword(e.target.value.trim())
    }
/*    const inputChangeHandler = e => {
        const keyword = e.target.value
        props.onFilter(keyword)
    }*/

    return (
            <div className={classes.FilterMeals}>
                <div className={classes.InputOut}>
                    <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}/>
                    <input
                        onChange={inputChangeHandler}
                        className={classes.SearchInput}
                        type="text"
                        placeholder="please input the name"/>
                </div>
            </div>
    );
};

export default FilterMeals;
