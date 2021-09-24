import React from "react";
import { Route } from "react-router";
import style from '../../src/App.module.css';

const Red = function( { timer } ) {
    return(
        <Route path='/red' exact>
            {
                timer > 3
                    ?
                    <>
                        <div className={`${style.signal} ${style.signal_green_off}`}></div>
                        <div className={`${style.signal} ${style.signal_yellow_off}`}></div>
                        <div className={`${style.signal} ${style.signal_red_on}`}></div>
                    </>
                    :
                    <>
                        <div className={`${style.signal} ${style.signal_green_off}`}></div>
                        <div className={`${style.signal} ${style.signal_yellow_off}`}></div>
                        <div className={`${style.signal} ${style.signal_red_on} ${style.signal_red_blinck}`}></div>
                    </>
            }
        </Route>
    )
}

export default Red;