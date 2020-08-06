import React from 'react';
import { Styles } from './style';
import Images from 'images';
import { useWindowInnerSize } from 'hooks/windowHooks';
import { GlobalBg, BgShapes } from 'components/GlobalBg';

const Intro = () => {
  const { height } = useWindowInnerSize();
  
  return (
    <>
      <Styles.Wrapper height={height}>
        <Styles.Header>
          <img src={Images.simpleLogo} alt='Tribes (logo)' />
        </Styles.Header>

        <Styles.Main>
          <h1>Qual a sua tribo ?</h1>
          <p><em>Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.</em></p>
        </Styles.Main>
        
        <Styles.ButtonWrapper>
          <Styles.RoundedLink to='/topicos'>
            <img src={Images.arrowRight} alt='' />
          </Styles.RoundedLink>
        </Styles.ButtonWrapper>
      </Styles.Wrapper>
      <BgShapes />
      <GlobalBg />
    </>
  )
}

export default Intro;