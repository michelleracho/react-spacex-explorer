import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

/* Layout Components */
import Header from './Header';
import Footer from './Footer';

/* Page Level Components */
import Home from '../pages/home';
import Launches from '../pages/launches';
import Login from '../pages/login';

import { auth } from '../services/firebase';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
`;

export default function Layout(props) {
  // user login state starts empty
  const [authState, setAuthState] = useState({});

  useEffect(() => {
    // observer - allows us to watch if someone logs in/out
    const clearObserver = auth.onAuthStateChanged(user => {
      if (user) {
        setAuthState({
          displayName: user.displayName,
          photoURL: user.photoURL,
          authenticated: true
        });
      } else {
        setAuthState({
          displayName: null,
          photoURL: null,
          authenticated: false
        });
      }
    });
    // clean up observer from browser memory
    return () => {
      clearObserver();
    };
  }, []);

  // console.log(authState);

  return (
    <StyledLayout>
      <Header avatar={authState.photoURL} authenticated={authState.authenticated} />
      <main>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/launches"
            render={props => {
              if (authState.authenticated) {
                return <Launches {...props} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            exact
            path="/login"
            render={props => <Login authenticated={authState.authenticated} {...props} />}
          />
        </Switch>
      </main>
      <Footer />
    </StyledLayout>
  );
}
