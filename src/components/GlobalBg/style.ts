import styled from 'styled-components';
import Images from 'images';

const BG = styled.span`
  background: url(${Images.globalBg}) no-repeat center top;
  background-size: cover;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  &:after {
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

const BGShapes = styled(BG)`
  background: url(${Images.bgShapes}) no-repeat center bottom;
  z-index: 2;

  &:after {
    display: none;
  }
`;

export const Styles = {
  BG,
  BGShapes
}