import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="count">{count}</h1>
      <button className={classes.btn} onClick={() => setCount(prev => prev + 1)}>increase</button>
    </div>
  )
}

