import React from "react";
import { Route } from 'react-router';
import style from '../../src/App.module.css';

const Green = function( { timer } ) {
    return(
        <Route path='/green' exact>
          {
            timer > 3 
              ?
                <>
                  <div className={`${style.signal} ${style.signal_green_on}`}></div>
                  <div className={`${style.signal} ${style.signal_yellow_off}`}></div>
                  <div className={`${style.signal} ${style.signal_red_off}`}></div>
                </>
              :
                <>
                  <div className={`${style.signal} ${style.signal_green_on} ${style.signal_green_blinck}`}></div>
                  <div className={`${style.signal} ${style.signal_yellow_off}`}></div>
                  <div className={`${style.signal} ${style.signal_red_off}`}></div>
                </>
          }
        </Route>
    )
}

export default Green;