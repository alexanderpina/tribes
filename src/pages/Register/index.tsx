import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from './style';
import {Formik, Form as FormikForm } from 'formik';
import FieldComponent from 'components/Form/fields';
import GlobalBg from 'components/GlobalBg';
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
  const initialValues: FormValues = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        // history.push('/perfil');
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid }) => (
        <>
          <Styles.RegisterWrapper>
            <Styles.RegisterHeader>
              <img src={Images.logo} alt='Tribes (logo)' />
            </Styles.RegisterHeader>

            <FormikForm>
              <FieldComponent id='name' label='Nome' />
              <FieldComponent id='lastname' label='Sobrenome' />
              <FieldComponent id='username' label='Username' />
              <FieldComponent id='email' label='email' type='email' />
              <FieldComponent id='password' label='Senha' type='password' />
              <FieldComponent id='confirmPassword' label='Digite a senha novamente' type='password' />
              
              <p>
                <button disabled={isSubmitting || !isValid} type="submit">
                  Cadastrar
                </button>
                
                <button type="button" disabled={true}>
                  <i>F</i>
                  Sign in
                </button>
              </p>

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