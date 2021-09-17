import React from "react";
import { Route } from "react-router";
import style from '../../src/App.module.css';

const Yellow = function( { timer } ) {
    return(
        <Route path='/yellow' exact>
          {
            timer > 3
              ?
                <>
                  <div className={`${style.signal} ${style.signal_green_off}`}></div>
                  <div className={`${style.signal} ${style.signal_yellow_on}`}></div>
                  <div className={`${style.signal} ${style.signal_red_off}`}></div>
                </>
              :
                <>
                  <div className={`${style.signal} ${style.signal_green_off}`}></div>
                  <div className={`${style.signal} ${style.signal_yellow_on} ${style.signal_yellow_blinck}`}></div>
                  <div className={`${style.signal} ${style.signal_red_off}`}></div>
                </>
          }
        </Route>
    )
}

export default Yellow;