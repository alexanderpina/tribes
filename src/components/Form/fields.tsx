import React, { useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import { Styles } from './style';
import Images from 'images';

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
  type='text'
}: FieldComponentProps) => {
  const [changeType, setChangeType] = useState<string>(type);
  const toggleChangePasswordType = () => {
    if (changeType === 'password') {
      setChangeType('text')
    } else {
      setChangeType('password')
    }
  }

  return (
    <Styles.FieldComponent>
      {!!label && (
        <Styles.FieldLabel htmlFor={id}>{label}</Styles.FieldLabel>
      )}
      
      <Styles.WrapperField>
        <Field type={changeType} name={name || id} id={id} />
        {type === 'password' && (
          <Styles.Icon onClick={toggleChangePasswordType}>
            <img src={changeType === 'password' ? Images.eye : Images.eyeFull} alt='eye' />
          </Styles.Icon>
        )}
      </Styles.WrapperField>

      <Styles.MessageError>
        <ErrorMessage name={name || id} />
      </Styles.MessageError>
    </Styles.FieldComponent>
  )
}

export default FieldComponent;