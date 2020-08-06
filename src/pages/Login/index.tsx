import React, { useEffect, useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';
import { login } from 'store/login/loginAction';
import { RequestStatus } from 'common/types';
import { Styles } from './style';
import { Styles as FormStyles } from 'components/Form/style';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'store/selector';
import { useWindowInnerSize } from 'hooks/windowHooks';
import Button from 'components/Button';
import FieldComponent from 'components/Form/fields';
import { GlobalBg } from 'components/GlobalBg';
import Images from 'images';
import validationSchema from './validationSchema';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { height } = useWindowInnerSize();
  const loginState = useSelector(state => state.login);
  const history = useHistory();
  const [loginError, setLoginError] = useState<Boolean>(false);
  const initialValues: FormValues = {
    email: '',
    password: '',
  }

  useEffect(() => {
    switch (loginState.status) {
      case RequestStatus.SUCCESS:
        history.push('/perfil');
        break;
      case RequestStatus.FAILURE:
        setLoginError(true);
        break;
      default:
        setLoginError(false);
        break;
    }
  }, [history, loginState.status])

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values, actions) => {
        dispatch(login.request(values));
        actions.setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, values }) => (
        <>
          <Styles.Wrapper height={height}>
            <FormikForm>
              <Styles.Header>
                <img src={Images.logo} alt='Tribes (logo)' />
              </Styles.Header>
              <FieldComponent id='email' label='Email' />
              <FieldComponent id='password' type='password' label='Senha' />

              {loginError && (
                <FormStyles.MessageError>
                  <p>Email ou senha inválidos</p>
                </FormStyles.MessageError>
              )}

              <p>
                <Button 
                  label='Login' 
                  disabled={
                    (!values.email || !values.password) || 
                    isSubmitting || 
                    !isValid
                  } 
                  type='submit'
                />
              </p>

            </FormikForm>
            
            <p>Ainda não possui uma conta? <Link to='/cadastre-se'>Cadastre-se</Link></p>
          </Styles.Wrapper>
          <GlobalBg />
        </>
      )}
    </Formik>
  )
}
export default Login;