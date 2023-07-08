import { createSlice } from '@reduxjs/toolkit';
import {legacy_createStore as createStore} from 'redux';

createSlice({
  
});


const counterReducer = (currentState = { counter: 0, showCounter: true }, action) => {
  console.log(action);
  if (action.type === 'increment') {
    return {
      counter: currentState.counter + 1,
      showCounter: currentState.showCounter
    };
  } else if (action.type === 'decrement') {
    return {
      counter: currentState.counter - 1,
      showCounter: currentState.showCounter
    };
  } else if (action.type === 'increase') {
     return {
       counter: currentState.counter + action.amount,
       showCounter: currentState.showCounter
     }
  }
  if (action.type === 'toggle'){
    return {
      showCounter: !currentState.showCounter,
      counter: currentState.counter
    }
  }
    
  return currentState;
}

const store = createStore(counterReducer);
export default store;