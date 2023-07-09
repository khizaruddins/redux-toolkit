import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  const counterHandler = (type) => {
    if (type === 'incr') {
      dispatch(counterActions.increment());
    }
    if (type === 'decr') {
      dispatch(counterActions.decrement());
    }
    if (type === 'increase') {
      dispatch(counterActions.increase(5)); // { type: SOME_PREGENERATED KEY, payload: 5 }
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