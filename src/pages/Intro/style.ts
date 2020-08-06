import styled from 'styled-components';
import { Styles as RegisterStyles } from 'pages/Register/style';
import { Link } from 'react-router-dom';
import { colors } from 'utils/colors'; 
import Images from 'images';

const Main = styled.main`
  text-align: center;

  h1 {
    font-size: 26px;
    margin-bottom: 30px;
  }

  p {
    line-height: 1.8;
  }
`;

const Wrapper = styled(RegisterStyles.RegisterWrapper)`
  justify-content: center;
`;

const Header = styled(RegisterStyles.RegisterHeader)`
  padding: 10% 0;

  img {
    height: 154px;
  }
`;

const RoundedLink = styled(Link)`
  background: ${colors.primary.default};
  border-radius: 50%;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 48px;

  &:after {
    content: '';
    background: url(${Images.bgButton}) no-repeat 0;
    height: 12px;
    left: 0;
    position: absolute;
    transform: translateY(50%);
    top: 12px;
    width: 55px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 80px 0;
  justify-content: flex-end;
  position: relative;
  width: 1005;
`;

export const Styles = {
  ButtonWrapper,
  Header,
  Main,
  RoundedLink,
  Wrapper
}