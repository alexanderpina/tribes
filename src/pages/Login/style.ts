import styled from 'styled-components';
import { Styles as RegisterStyles } from 'pages/Register/style';

const Wrapper = styled(RegisterStyles.RegisterWrapper)``;
const Header = styled(RegisterStyles.RegisterHeader)`
  padding: 10% 0;

  img {
    height: 129px;
  }
`;
const Main = styled.main``;

export const Styles = {
  Main,
  Header,
  Wrapper
}