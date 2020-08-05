import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './global-styles';
import Loading from 'components/Loading';
import PrivateRoute from 'components/Routing';

const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Register = lazy(() => import('pages/Register'));
const Profile = lazy(() => import('pages/Profile'));

const App = () =>
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Route path='/sair' component={Logout} exact={true} />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/cadastre-se" component={Register} exact />
          <PrivateRoute
            exact={true}
            path="/perfil"
            component={Profile}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>

export default App;
