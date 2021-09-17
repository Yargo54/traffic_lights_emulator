import { useState } from 'react';
import { useHistory } from 'react-router';
import style from './App.module.css';
import Green from './pages/Green';
import Main from './pages/Main';
import Navbar from './pages/Navbar';
import Red from './pages/Red';
import Yellow from './pages/Yellow';

function App() {

  const [timer, setTimer] = useState('');

  let history = useHistory();
  let time;

  function signalGreenOn() {
    localStorage.setItem('pastColor', 'green');
    setTimer(10);
    time = 9
    const green = setInterval(() => {
      if (time > 0 && history.location.pathname === '/green') {
        setTimer(time);
        time -= 1;
      } else if (time > 0 && history.location.pathname === '/') {
        clearInterval(green);
        setTimer('')
      } else {
        clearInterval(green); 
        history.push('/yellow');
        countdown();
      }
    }, 1000)
  }

  function signalYellowOn() {
    setTimer(3);
    time = 2;
    const yellow = setInterval(() => {
      if (time > 0 && history.location.pathname === '/yellow') {
        setTimer(time);
        time -= 1;
      } else if (time > 0 && history.location.pathname === '/') {
        clearInterval(yellow);
        setTimer('');
      } else {
        clearInterval(yellow);
        switch(localStorage.getItem('pastColor')) {
          case "green":
            history.push('/red');
            countdown();
            break;
          case "red":
            history.push('/green');
            countdown();
            break;
          default:
            break;
        }
      }
    }, 1000)
  }

  function signalRedOn() {
    localStorage.setItem('pastColor', 'red');
    setTimer(15);
    time = 14;
    const red = setInterval(() => {
      if (time > 0 && history.location.pathname === '/red') {
        setTimer(time);
        time -= 1;
      } else if (time > 0 && history.location.pathname === '/') {
        clearInterval(red);
        setTimer('');
      } else {
        clearInterval(red);
        history.push('/yellow');
        countdown();
      }
    }, 1000)
  }

  function countdown() {
    switch (history.location.pathname) {
      case '/green':
        signalGreenOn();
        break;
      case '/yellow':
        signalYellowOn();
        break;
      case '/red':
        signalRedOn();
        break;
      default:
        break;
    }
  }

  return (
    <div className={style.main}>
      <Navbar countdown={countdown} history={history}/>
      <div className={style.frame}>
        <div className={style.number}>{timer}</div>
        <Green timer={timer}/>
        <Yellow timer={timer}/>
        <Red timer={timer}/>
        <Main />
      </div>
    </div>
  );
}

export default App;