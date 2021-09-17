import React from 'react';
import { Route } from 'react-router';
import style from '../../src/App.module.css';

const Main = function() {
    return(
        <Route path='/' exact>
            <div className={`${style.signal} ${style.signal_green_off}`}></div>
            <div className={`${style.signal} ${style.signal_yellow_off}`}></div>
            <div className={`${style.signal} ${style.signal_red_off}`}></div>
        </Route>
    )
    
}

export default Main;