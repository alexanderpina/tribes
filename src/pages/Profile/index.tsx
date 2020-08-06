import React from "react";
import { Styles } from './style';
import GlobalBg from 'components/GlobalBg';

const Profile = () =>
  <>
    <Styles.Wrapper>
      <header>
        {/* <img src={} alt='' /> */}
      </header>

      <div>
        <h2>Prioridade de tópicos</h2>

        <ul>
          <li>Nome do tópico</li>
          <li>Nome do tópico 2</li>
          <li>Nome do tópico 3</li>
          <li>Nome do tópico 4</li>
        </ul>
      </div>
    </Styles.Wrapper>

    <GlobalBg />
  </>

export default Profile;