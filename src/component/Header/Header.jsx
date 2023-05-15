import { Link } from 'react-router-dom';

import classes from './header.module.scss';

function Header({access, setAccess, setSuccessfulRegistration}) {

  const logOut = () => {
    setSuccessfulRegistration(false)
    setAccess(false)
  };

  if (access) {
    return (
      <div className={classes['header-container']}>
          <h3>Test Blog</h3>
        <div className={classes['log-out']}>
          <Link to="/sign-in" onClick={logOut}>
            Log Out
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={classes['header-container']}>
        <h3>Test Blog</h3>
      <div className={classes['sign-in']}>
        <Link to="/sign-in">Sign In</Link>
      </div>
      <div className={classes['sign-up']}>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}

export default Header;
