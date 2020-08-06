import styled from 'styled-components';
import { Styles as RegisterStyles } from 'pages/Register/style';
import { Link } from 'react-router-dom';
import { colors } from 'utils/colors'; 

const Main = styled.main`
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 80px 0;
  justify-content: flex-end;
  width: 100%;
`;

const RoundedImg = styled.div`
  border-radius: 50%;
  height: 46px;
  overflow: hidden;
  width: 46px;
`;

const Text = styled.p`
  width: 50%;
`

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    background: ${colors.black.light};
    border-radius: 10px;
    display: flex;
    color: ${colors.white};
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 6px 10px;
  }
`;

export const Styles = {
  ButtonWrapper,
  CategoryList,
  Header,
  Main,
  RoundedImg,
  RoundedLink,
  Text,
  Wrapper
}