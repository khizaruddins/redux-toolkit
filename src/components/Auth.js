import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Auth.module.css';

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const submitHandler = () => {
    if (emailInputRef.current.value && passwordInputRef.current?.value) {
      dispatch(authActions.login());
      emailInputRef.current.value = '';
      passwordInputRef.current.value = '';
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={e => e.preventDefault()}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailInputRef} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordInputRef} type='password' id='password' />
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
