import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const toggleHandler = () => {
    dispatch({type: 'toggle'});
  }

  const counterHandler = (type, amount = 0) => {
    if (type === 'incr') {
      dispatch({type: 'increment'});
    }
    if (type === 'decr') {
      dispatch({type: 'decrement'});
    }
    if (type === 'increase') {
      dispatch({type: 'increase', amount});
    }
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && (<div className={classes.value}>{counter}</div>)}
      <button onClick={() => toggleHandler()}>Toggle counter</button>
      <button onClick={() => counterHandler('increase', 5)}>Increase by 5</button>
      <button onClick={() => counterHandler('incr')}>Increment </button>
      <button onClick={() => counterHandler('decr')}>Decrement</button>
    </main>
  );
};

export default Counter;