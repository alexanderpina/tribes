import React, { lazy, Suspense, StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyles from './global-styles';
import Loading from 'components/Loading';
import PrivateRoute from 'components/Routing';
import { store, history } from 'store';

const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Register = lazy(() => import('pages/Register'));
const Profile = lazy(() => import('pages/Profile'));
const Intro = lazy(() => import('pages/Intro'));
const Topics = lazy(() => import('pages/Topics'));

const App = () =>
  <StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <Suspense fallback={<Loading />}>
          <Route path='/sair' component={Logout} exact={true} />
          <Switch>
            <Route path="/entrar" component={Login} exact />
            <Route path="/cadastre-se" component={Register} exact />
            <Route path="/" component={Register} exact />
            <PrivateRoute
              exact={true}
              path="/intro"
              component={Intro}
            />
            <PrivateRoute
              exact={true}
              path="/topicos"
              component={Topics}
            />
            <PrivateRoute
              exact={true}
              path="/perfil"
              component={Profile}
            />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Provider>
  </StrictMode>

export default App;
