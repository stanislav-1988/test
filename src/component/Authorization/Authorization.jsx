import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import classes from './authorization.module.scss';

function Authorization({access, login, user}) {

  const [thereIsAccess, setThereIsAccess] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  if (access) {
    return <>{user.login}</>;
  }

  const sendingDataForAuthorization = (e) => {
    if (user.login === e.login || user.password === e.password) {
      login(true)
      reset()
      setThereIsAccess(false)
    } else {
      setThereIsAccess(true)
    }
  };

  return (
    <div className={classes['authorization-form']}>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit(sendingDataForAuthorization)}>
        <span>{thereIsAccess ? "wrong login or password!" : null}</span>
        <label htmlFor="emailAuthorization">Login</label>
        <input
          type="email"
          {...register('login', {
            required: 'введите емайл',
            pattern: {
              value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
              message: 'некорректный адрес почты',
            },
          })}
          id="emailAuthorization"
          style={{ borderColor: errors.login && 'red' }}
          placeholder="Login"
        />
        <div>{errors?.password && <p>{errors?.login?.message || 'Error!'}</p>}</div>
        <label htmlFor="passwordAuthorization">Password</label>
        <input
          type="password"
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'минимальная длинна пароля 6 символов',
            },
            maxLength: {
              value: 40,
              message: 'максимальная длинна пароля 40 символов',
            },
          })}
          id="passwordAuthorization"
          placeholder="Password"
        />
        <div>{errors?.password && <p>{errors?.password?.message || 'пароль не введен'}</p>}</div>
        <input className={classes['submit-login']} type="submit" value="Login" />
      </form>
      <span className={classes['registration-link']}>
        Don’t have an account? <Link to="/sign-up">Sign Up.</Link>
      </span>
    </div>
  );
}

export default Authorization;
