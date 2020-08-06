import styled from 'styled-components';

type HeightProps = {
  height?: number;
};

const RegisterWrapper = styled.section<HeightProps>`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ height }) => !!height ? `${height}px` : 'auto'};
  margin: 0;
  padding: 21px 31px;
  width: 100%;
  z-index: 5;

  a {
    color: #fff;
  }
`;

const RegisterHeader = styled.header`
  margin: 0;
  padding: 0;
  text-align: center;

  img {
    height: 79px;
  }
`;

const GroupButtons = styled.div`
  display: flex;
  margin: 25px 0;
  justify-content: space-between;

  button {
    width: 46%;
  }
`;

export const Styles = {
  GroupButtons,
  RegisterHeader,
  RegisterWrapper
}