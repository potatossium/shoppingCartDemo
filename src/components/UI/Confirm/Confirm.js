import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css';

const Confirm = (props) => {
    return (
        <Backdrop className={classes.ConfirmOuter}>
            <div className={classes.Confirm}>
                <p>{props.confirmText}</p>
                <div className={classes.ConfirmText}>
                    <button
                        onClick={(e)=>{e.stopPropagation(); props.ifNo()}}
                        className={classes.No}>取消</button>
                    <button
                        onClick={()=>{props.ifYes()}}
                        className={classes.Yes}>确认</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;
