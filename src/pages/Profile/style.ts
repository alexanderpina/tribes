import styled from 'styled-components';
import { Styles as RegisterStyles } from 'pages/Register/style';
import { Link } from 'react-router-dom';
import { colors } from 'utils/colors'; 

const Main = styled.main`
`;

const Wrapper = styled(RegisterStyles.RegisterWrapper)`
  background: #303134;
  padding-top: 69px;
`;

const Header = styled(RegisterStyles.RegisterHeader)`
  padding: 10% 0;

  img {
    border: 10px solid green;
    border-radius: 50%;
    height: 250px;
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
  width: 70%;
`

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  h3 {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 8px;
    text-align: center;
  }

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

export const GlobalHeader = styled.header`
  align-items: center;
  background: linear-gradient(95.76deg, #E57728 -8.84%, #E5A858 49.4%, #84C167 106.44%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 5px 22px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 6;

  img {
    height: 20px;
  }
`;

export const Styles = {
  ButtonWrapper,
  GlobalHeader,
  CategoryList,
  Header,
  Main,
  RoundedImg,
  RoundedLink,
  Text,
  Wrapper
}