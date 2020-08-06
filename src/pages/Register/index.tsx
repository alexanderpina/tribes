import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { register } from 'store/register/registerAction';
import { RequestStatus } from 'common/types';
import { Styles } from './style';
import { Styles as FormStyles } from 'components/Form/style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store/selector';
import { useWindowInnerSize } from 'hooks/windowHooks';
import {Formik, Form as FormikForm } from 'formik';
import Button from 'components/Button';
import FieldComponent from 'components/Form/fields';
import { GlobalBg } from 'components/GlobalBg';
import Images from 'images';
import validationSchema from './validationSchema';

interface FormValues {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { height } = useWindowInnerSize();
  const [registerError, setRegisterError] = useState<Boolean>(false);
  const registerStatus = useSelector(state => state.register.status);
  const initialValues: FormValues = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  useEffect(() => {
    switch (registerStatus) {
      case RequestStatus.SUCCESS:
        history.push('/entrar');
        break;
      case RequestStatus.FAILURE:
        setRegisterError(true);
        break;
    
      default:
        setRegisterError(false);
        break;
    }
  }, [history, registerStatus]);

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values, actions) => {
        dispatch(register.request(values));
        actions.setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, values }) => (
        <>
          <Styles.RegisterWrapper height={height}>
            <Styles.RegisterHeader>
              <img src={Images.logo} alt='Tribes (logo)' />
            </Styles.RegisterHeader>

            <FormikForm>
              <FieldComponent id='name' label='Nome*' />
              <FieldComponent id='lastname' label='Sobrenome' />
              <FieldComponent id='username' label='Username' />
              <FieldComponent id='email' label='email*' type='email' />
              <FieldComponent id='password' label='Senha*' type='password' />
              <FieldComponent id='confirmPassword' label='Digite a senha novamente*' type='password' />

              {registerError && (
                <FormStyles.MessageError>
                  <p>Algo aocnteceu, por favor tente novamente.</p>
                </FormStyles.MessageError>
              )}
              
              <Styles.GroupButtons>
                <Button 
                  label='Cadastrar' 
                  disabled={(
                      !values.name || 
                      !values.password ||
                      !values.confirmPassword
                    ) || 
                    isSubmitting || 
                    !isValid
                  } 
                  type='submit'
                />
                
                <Button 
                  label='Sign in'
                  disabled={true} 
                  type='button'
                />
              </Styles.GroupButtons>

              <p>Já possui uma conta? <Link to='/entrar'>Faça login</Link></p>
            </FormikForm>
          </Styles.RegisterWrapper>

          <GlobalBg />
        </>
      )}
    </Formik>
  )
}

export default Register;