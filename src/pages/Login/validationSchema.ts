import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('Digite seu email.')
    .email('Email inválido'),
  password: Yup.string()
    .required('Digite uma senha.')
    .min(6, 'A senha precisa ter pelo menos 4 caracteres.'),
});
