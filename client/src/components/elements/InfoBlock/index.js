import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/elements/Title';
import InfoText from 'components/elements/InfoText';

const Container = styled.div`
  width: 100%;
  background-color: #242935;
  border: 1px solid #6798A8;
  border-radius: 5px;
  &:nth-child( n + 2 ) {
    margin-top: 25px;
  }
`

const Content = styled.div`
  min-height: 75px;
  ${ props => !props.withoutPadding && 'padding: 20px;'}
`


function InfoBlock(props) {
  const { title, withoutPadding } = props;
  return (
    <Container>
      <Title title={title}/>
      <Content withoutPadding={withoutPadding}>
      {
        props.children || <InfoText text='данные отсутствуют' />
      }
      </Content>
    </Container>
  )
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  withoutPadding: PropTypes.bool,
}

export default InfoBlock;
