import React from 'react';
import Images from 'images';
import { StyledLoading as Styled } from './style';

const Loading = () => 
  <Styled.Wrapper>
    <Styled.Content>
      <img src={Images.loading} alt="Carregando.."/>
    </Styled.Content>
    <Styled.BG />
  </Styled.Wrapper>

export default Loading;