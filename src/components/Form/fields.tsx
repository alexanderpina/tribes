import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { Styles } from './style';

interface FieldComponentProps {
  id: string;
  label?: string;
  name?: string;
  type?: string;
}

const FieldComponent = ({
  id,
  label,
  name,
  type
}: FieldComponentProps) => {

  return (
    <Styles.FieldComponent>
      {!!label && (
        <Styles.FieldLabel htmlFor={id}>{label}</Styles.FieldLabel>
      )}
      <Field type={type || 'text'} name={name || id} id={id} />
      <Styles.Error>
        <ErrorMessage name={name || id} />
      </Styles.Error>
    </Styles.FieldComponent>
  )
}

export default FieldComponent;