import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/elements/Title';

const Container = styled.div`
  width: 100%;
  background-color: #242935;
  border: 1px solid #6798A8;
  border-radius: 5px;
`
const InfoText = styled.div`
  color: grey;
`
const Content = styled.div`
  padding: 20px;
`


function InfoBlock(props) {
  const { title } = props;
  return (
    <Container>
      <Title title={title}/>
      <Content>
      {
        props.clildren || <InfoText>нет данных</InfoText>
      }
      </Content>
    </Container>
  )
}

InfoBlock.propTypes = {
  props: PropTypes.string.isRequired,
}

export default InfoBlock;
