import { useEffect, useState } from 'react';
import { useHistory, Route } from 'react-router';
import style from './App.module.css';

function App() {

  const [timer, setTimer] = useState('');

  let history = useHistory();
  let time;

  function countdown() {
    switch (history.location.pathname) {
      case '/green':
        localStorage.setItem('pastColor', 'green');
        setTimer(10);
        time = 9;
        const green = setInterval(() => {
          if (time <= 0 || history.location.pathname !== '/green') {
            clearInterval(green);
            switch (history.location.pathname) {
              case '/green':
                history.push('/yellow');
                countdown();
                break;
              case '/yellow':
                setTimer(3)
                break;
              case '/red':
                setTimer(15)
                break;
              case '/':
                setTimer('')
                break;
              default:
                break;
            }
          } else {
            setTimer(time);
            time -= 1;
          }
      }, 1000)
        break;
      case '/yellow':
        setTimer(3);
        time = 2;
        const yellow = setInterval(() => {
          if (time <= 0 || history.location.pathname !== '/yellow') {
            clearInterval(yellow);
            switch (history.location.pathname) {
              case '/yellow':
                if (localStorage.getItem('pastColor') === "green"){
                  history.push('/red');
                  countdown();
                } else {
                  history.push('/green');
                  countdown();
                }
                break;
              case '/green':
                setTimer(10)
                break;
              case '/red':
                setTimer(15);
                break;
              case '/':
                setTimer('');
                break;
              default:
                break;
            }
          } else {
            setTimer(time);
            time -= 1;
          }
        }, 1000)
        break;
      case '/red':
        setTimer(15);
        localStorage.setItem('pastColor', 'red');
        time = 14;
        const red = setInterval(() => {
          if (time <= 0 || history.location.pathname !== '/red') {
            clearInterval(red);
            switch (history.location.pathname) {
              case '/red':
                history.push('/yellow');
                countdown();
                break;
              case '/green':
                setTimer(10)
                break;
              case '/yellow':
                setTimer(3);
                break;
              case '/':
                setTimer('');
                break;
              default:
                break;
            }
          } else {
            setTimer(time);
            time -= 1;
          }
        }, 1000)
        break;
      default:
        break;
    }
  }

  return (
    <div className={style.main}>
      <button 
        className={style.button_switch_off} 
        onClick={()=> 
          history.push('/')
        }>Выключить</button>
      <button 
        className={style.button} 
        onClick={()=> {
          history.push('/green');
          countdown()}
        }>Включить зелёный</button>
      <button 
        className={style.button} 
        onClick={()=> {
          history.push('/yellow');
          countdown()}
        }>Включить жёлтый</button>
      <button 
        className={style.button} 
        onClick={()=> {
          history.push('/red');
          countdown()}
        }>Включить красный</button>
      <div className={style.frame}>
        <div className = {style.number}>{timer}</div>
        <Route path='/green' exact>
          {
            timer > 3 
              ?
                <>
                  <div className={style.green_switched_on}></div>
                  <div className={style.yellow_switched_off}></div>
                  <div className={style.red_switched_off}></div>
                </>
              :
                <>
                  <div className={style.green_switched_blinck}></div>
                  <div className={style.yellow_switched_off}></div>
                  <div className={style.red_switched_off}></div>
                </>
          }
        </Route>
        <Route path='/yellow' exact>
          {
            timer > 3
              ?
                <>
                  <div className={style.green_switched_off}></div>
                  <div className={style.yellow_switched_on}></div>
                  <div className={style.red_switched_off}></div>
                </>
              :
                <>
                  <div className={style.green_switched_off}></div>
                  <div className={style.yellow_switched_blinck}></div>
                  <div className={style.red_switched_off}></div>
                </>
          }
        </Route>
        <Route path='/red' exact>
          {
            timer > 3
              ?
                <>
                  <div className={style.green_switched_off}></div>
                  <div className={style.yellow_switched_off}></div>
                  <div className={style.red_switched_on}></div>
                </>
              :
                <>
                  <div className={style.green_switched_off}></div>
                  <div className={style.yellow_switched_off}></div>
                  <div className={style.red_switched_blinck}></div>
                </>
          }
        </Route>
        <Route path='/' exact>
          <div className={style.green_switched_off}></div>
          <div className={style.yellow_switched_off}></div>
          <div className={style.red_switched_off}></div>
        </Route>
      </div>
    </div>
  );
}

export default App;

  // useEffect(() => {
  //   let time;
  //   switch (localStorage.getItem('routeName')) {
  //     case '/green':
  //       setTimer(10)
  //       localStorage.setItem('pastСolor', 'green');
  //       time = 9;
  //       const green = setInterval(() => {
  //         setTimer(time)
  //         console.log('отсалось', time, 'секунд')
  //         time -= 1;
  //         if (time < 0) {
  //           clearTimeout(green)
  //           localStorage.setItem('routeName', '/yellow')
  //           history.push(localStorage.getItem('routeName'));
  //           setRouteName('/yellow')
  //         }
  //       }, 1000)
  //       break;
  //     case '/yellow':
  //       setTimer(3)
  //       time = 2;
  //       const yellow = setInterval(() => {
  //         setTimer(time)
  //         console.log('отсалось', time, 'секунд')
  //         time -= 1;
  //         if (time < 0 && localStorage.getItem('pastСolor') === 'green') {
  //           clearTimeout(yellow);
  //           localStorage.setItem('routeName', '/red')
  //           history.push(localStorage.getItem('routeName'));
  //           setRouteName('/red')
  //         } else if (time < 0 && localStorage.getItem('pastСolor') === 'red'){
  //           clearTimeout(yellow);
  //           localStorage.setItem('routeName', '/green')
  //           history.push(localStorage.getItem('routeName'));
  //           setRouteName('/green')
  //         }
  //       }, 1000)
  //       break;
  //     case '/red':
  //       setTimer(15)
  //       localStorage.setItem('pastСolor', 'red');
  //       time = 14;
  //       const red = setInterval(() => {
  //         setTimer(time)
  //         console.log('отсалось', time, 'секунд')
  //         time -= 1;
  //         if (time < 0) {
  //           setTimer(3)
  //           clearTimeout(red)
  //           localStorage.setItem('routeName', '/yellow')
  //           history.push(localStorage.getItem('routeName'));
  //           setRouteName('/yellow')
  //         }
  //       }, 1000)
  //       break;
  //     default:
  //       // localStorage.setItem('routeName', '/green');
  //       // history.push(localStorage.getItem('routeName'));
  //       // setRouteName('/green')
  //       break;
  //   }
  // }, [routeName, history])