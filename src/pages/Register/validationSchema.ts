import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('Digite seu email.')
    .email('Email inválido.'),
  name: Yup.string()
    .required('Digite seu nome.'),
  password: Yup.string()
    .required('Digite uma senha.')
    .min(6, 'A senha precisa ter pelo menos 4 caracteres.'),
  confirmPassword: Yup.string()
    .required('Confirme a nova senha.')
    .min(6, 'A senha precisa ter pelo menos 4 caracteres.')
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
});
