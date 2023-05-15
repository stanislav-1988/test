import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import classes from './registration.module.scss';

function Registration({setUser, access, successfulRegistration, setSuccessfulRegistration}) {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const registrationData = (e) => {
  setUser(e)
  reset()
  setSuccessfulRegistration(true)
  };

  if (successfulRegistration) {
    return <Navigate to='/sign-in' />
  } else {
  return (
    <div className={classes['registration-list']}>
      <div className={classes['registration-form']}>
        <h3>Create new account</h3>
        <form onSubmit={handleSubmit(registrationData)}>
          <label htmlFor="userNameRegistration">Username</label>
          <input
            {...register('login', {
              required: 'придумайте логин',
              minLength: {
                value: 3,
                message: 'минимальная длинна логина 3 символов',
              },
              maxLength: {
                value: 20,
                message: 'максимальная длинна логина 20 символов',
              },
            })}
            id="userNameRegistration"
            style={{ borderColor: errors.login && 'red' }}
            type="text"
            placeholder="Username"
          />
          <div>{errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}</div>
          <label htmlFor="emailRegistration">Email address</label>
          <input
            {...register('email', {
              required: 'введите корректный адрес',
              pattern: {
                value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
                message: 'некорректный адрес почты',
              },
            })}
            id="emailRegistration"
            style={{ borderColor: errors.email && 'red' }}
            type="email"
            placeholder="Email address"
          />
          <div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
          <label htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: 'придумайте пароль от 6 до 40 символов',
              minLength: {
                value: 6,
                message: 'минимальная длинна пароля 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'максимальная длинна пароля 40 символов',
              },
            })}
            id="password"
            style={{ borderColor: errors.repeatPassword && 'red' }}
            type="password"
            placeholder="Password"
          />
          <div>
            {errors?.repeatPassword && <p>{errors?.repeatPassword.validate?.message || 'пароли не совпадают'}</p>}
          </div>
          <div>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            {...register('repeatPassword', {
              required: 'повторите пароль',
              minLength: {
                value: 6,
                message: 'минимальная длинна пароля 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'максимальная длинна пароля 40 символов',
              },
              validate: (value) => value === watch('password') || 'пароли не совпадают',
            })}
            id="repeatPassword"
            style={{ borderColor: errors.repeatPassword && 'red' }}
            type="password"
            placeholder="Repeat Password"
          />
          <div>{errors?.repeatPassword && <p>{errors?.repeatPassword?.message || 'Error!'}</p>}</div>
          <div className={classes['agreement-container']}>
            <input
              {...register('checkbox', {
                required: true,
              })}
              style={{ color: errors.checkbox && 'red' }}
              id="agreement"
              className={classes.agreement}
              type="checkbox"
              placeholder="Repeat Password"
            />
            <label htmlFor="agreement">I agree to the processing of my personal information</label>
          </div>
          <div>{errors?.checkbox && <p>необходимо дать согласие!</p>}</div>
          <input className={classes['submit-create']} type="submit" value="Create" />
        </form>
        <span className={classes['registration-link']}>
          Already have an account? <Link to="/sign-in">Sign In.</Link>
        </span>
      </div>
    </div>
  );
}
}

export default Registration;
