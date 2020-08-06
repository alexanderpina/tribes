import React, { useEffect } from 'react';
import { Styles } from './style';
import { useDispatch } from 'react-redux';
import Images from 'images';
import { useWindowInnerSize } from 'hooks/windowHooks';
import { GlobalBg, BgShapes } from 'components/GlobalBg';
import { useSelector } from 'store/selector';
import { topics, topicsRemove } from 'store/topics/topicsAction';
import Button from 'components/Button';

const Topics = () => {
  const dispatch = useDispatch();
  const { height } = useWindowInnerSize();
  const data = useSelector(state => state.topics.data);
  
  const removeCategory = (id: number) => {
    // remove
    dispatch(topicsRemove.request({ id: id }));
  }

  useEffect(() => {
    if (!data) {
      dispatch(topics.request());
    }
  }, [data, dispatch])

  return (
    <>
      <Styles.Wrapper height={height}>
        <Styles.Main>
          <Styles.CategoryList>
            {data?.categories.map(category => {
              return (
                <li key={category.id}>
                  <Styles.RoundedImg>
                    <img src={Images.twil} alt='' />
                  </Styles.RoundedImg>
                  <Styles.Text>{category.name}</Styles.Text>
                  <Button label='x' onlyLabel={true} onClick={() => removeCategory(category.id)} />
                </li>
              )
            })}
          </Styles.CategoryList>
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

export default Topics;