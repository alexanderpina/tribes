import React from 'react';
import { Styles } from './style';
import LoginForm from './form';
import GlobalBg from 'components/GlobalBg';
import Images from 'images';

const Login = () =>
  <Styles.LoginWrapper>
    <Styles.Main>
      <Styles.Header>
        <img src={Images.logo} alt='Tribes (logo)' />
      </Styles.Header>
      <LoginForm />
    </Styles.Main>
    <GlobalBg />
  </Styles.LoginWrapper>

export default Login;