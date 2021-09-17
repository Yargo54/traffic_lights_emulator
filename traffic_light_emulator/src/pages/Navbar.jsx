import React from "react";
import style from '../../src/App.module.css';

const Navbar = function( { countdown, history } ) {

    return(
        <>
            <button 
                className={`${style.button} ${style.button_switch_off}`} 
                onClick={()=> 
                    history.push('/')
                }
            >
                Выключить
            </button>
            <button 
                className={`${style.button} ${style.button_navigation_green}`} 
                onClick={()=> {
                    history.push('/green');
                    countdown()}
                }
            >
                Включить зелёный
            </button>
            <button 
                className={`${style.button} ${style.button_navigation_yellow}`} 
                onClick={()=> {
                    history.push('/yellow');
                    countdown()}
                }
            >
                Включить жёлтый
            </button>
            <button 
                className={`${style.button} ${style.button_navigation_red}`} 
                onClick={()=> {
                    history.push('/red');
                    countdown()}
                }
            >
                Включить красный
            </button>
        </>
    )
}

export default Navbar;