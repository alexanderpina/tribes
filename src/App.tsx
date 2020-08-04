import React, { lazy, Suspense } from 'react';
import GlobalStyles from './global-styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from 'components/Loading';

const Login = lazy(() => import('./pages/Login'));
const Logout = lazy(() => import('./pages/Logout'));

const App = () => (
  <>
    <GlobalStyles />

    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Route path='/sair' component={Logout} exact={true} />
        <Switch>
          <Route path="/entrar" component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
)

export default App;
