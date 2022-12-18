import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: grey;
`

function InfoText(props) {
  const { text } = props;
  return (
    <Container>{text}</Container>
  )
}

InfoText.propTypes = {
  text: PropTypes.string,
}

export default InfoText;
