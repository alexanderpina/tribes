import styled from 'styled-components';

const BG = styled.div`
  background: #fff;
  height: 100%;
  opacity: .85;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const Content = styled.article`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const Wrapper = styled.section`
  height: 100%;
  position: fixed;
  width: 100%;
`;

export const StyledLoading = {
  BG,
  Content,
  Wrapper
}