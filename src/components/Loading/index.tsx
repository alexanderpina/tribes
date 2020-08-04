import React from 'react';
import Images from 'images';
import { StyledLoading as Styled } from './style';

const Loading = () => 
  <Styled.Wrapper>
    <img src={Images.loading} alt="Carregando.."/>
  </Styled.Wrapper>

export default Loading;