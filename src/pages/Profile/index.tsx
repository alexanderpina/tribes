import React, { useEffect } from 'react';
import { Styles } from './style';
import { useDispatch } from 'react-redux';
import Images from 'images';
import { useWindowInnerSize } from 'hooks/windowHooks';
import { useSelector } from 'store/selector';
import { topics } from 'store/topics/topicsAction';

const Profile = () => {
  const dispatch = useDispatch();
  const { height } = useWindowInnerSize();
  const topicsData = useSelector(state => state.topics.data);

  useEffect(() => {
    if (!topicsData) {
      dispatch(topics.request());
    }
  }, [topicsData, dispatch]);

  return (
    <>
      <Styles.GlobalHeader>
        <img src={Images.menu} alt ='' />
        <h3>Alexander</h3>
        <img src={Images.edit} alt ='' />
      </Styles.GlobalHeader>

      <Styles.Wrapper height={height}>
        <Styles.Main>
          <Styles.Header>
            <img src={Images.profilePhoto} alt='' />
          </Styles.Header>
          <Styles.CategoryList>
            <h3>Prioridade de tópicos</h3>
            {topicsData?.categories.map(category => {
              return (
                <li key={category.id}>
                  <Styles.RoundedImg>
                    <img src={Images.twil} alt='' />
                  </Styles.RoundedImg>
                  <Styles.Text>{category.name}</Styles.Text>
                </li>
              )
            })}
          </Styles.CategoryList>
        </Styles.Main>
      </Styles.Wrapper>
    </>
  )
}

export default Profile;