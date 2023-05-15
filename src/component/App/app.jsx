import { useState } from 'react';

import Header from '../Header';
import Authorization from '../Authorization';
import Registration from '../Registration';

import classes from './app.module.scss';

import { Routes, Route } from "react-router-dom";

function App() {

const [access, setAccess] = useState(false);
const [user, setUser] = useState({})
const  [successfulRegistration, setSuccessfulRegistration] = useState(false)

const login = (e) => setAccess(e)

  return (
    <div className={classes.body}>
      <Header 
        access={access}
        setAccess={setAccess}
        setSuccessfulRegistration={setSuccessfulRegistration}
      />
       <Routes>
          <Route 
            path="/sign-in" 
            element={<Authorization access={access} login={login} user={user}/>} 
          />
          <Route 
            path="/sign-up" 
            element={<Registration
                        setUser={setUser}
                        setSuccessfulRegistration={setSuccessfulRegistration}
                        successfulRegistration={successfulRegistration}
                      />}
          />      
      </Routes>
    </div>
  );
}

export default App;
