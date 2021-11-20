import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import LoginHeader from "./components/LoginHeader";
import RegisterHeader from "./components/RegisterHeader";
import Register from "./components/Register";
import HomeHeader from "./components/HomeHeader";
import { auth } from './Firebase';
import Posts from './components/Posts';
import { useSelector, useDispatch} from 'react-redux';
import {login, logout, selectUser} from './features/UserSlice'


function App() {

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((auth) => {
  //     if (auth) {
  //       dispatch(
  //         login({
  //           email: auth.email,
  //           uid: auth.uid,
  //           displayName: auth.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);

  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser)
    } else {
      setUser(false);
    }
  })

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader/>
            <Login/>
          </Route>
          <Route path="/register">
          <RegisterHeader/>
          <Register/>
          </Route>
          <Route path="/">
          <HomeHeader user={user}/>
          <div>
          <Posts user={user}/>
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
