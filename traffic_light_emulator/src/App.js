import { Route } from 'react-router';
import style from './App.module.css';

function App() {
  return (
    <div className={style.main}>
      <div className={style.frame}>

        <Route path="/green">
          <div className={style.green_switched_on}></div>
          <div className={style.yellow_switched_off}></div>
          <div className={style.red_switched_off}></div>
        </Route>

        <Route path="/yellow">
          <div className={style.green_switched_off}></div>
          <div className={style.yellow_switched_on}></div>
          <div className={style.red_switched_off}></div>
        </Route>

        <Route path="/red">
          <div className={style.green_switched_off}></div>
          <div className={style.yellow_switched_off}></div>
          <div className={style.red_switched_on}></div>
        </Route>
        
      </div>
    </div>
  );
}

export default App;
