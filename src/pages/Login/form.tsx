import React from 'react';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import validationSchema from './validationSchema';


interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<{}> = () => {
  const history = useHistory();
  const initialValues:FormValues = {
    email: '',
    password: '',
  }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        history.push('/perfil');
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, values }) => (
        <FormikForm>
          <p>
            <label>
              Email
              <Field type="email" name="email" />
            </label>
            <ErrorMessage name="email" />
          </p>
          
          <p>
            <label>
              Senha
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </label>
          </p>

          <p>
            <button disabled={(!values.email || !values.password) || isSubmitting || !isValid} type="submit">
              Login
            </button>
          </p>

          <p>Ainda não possui uma conta? <Link to='/cadastre-se'>Cadastre-se</Link></p>
        </FormikForm>
      )}
    </Formik>
  )
}

export default LoginForm;