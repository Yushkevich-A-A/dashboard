import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Contaiter = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 36px;
`

function MainTitle(props) {
  const { title } = props;
  return (
    <Contaiter>{title}</Contaiter>
  )
}

MainTitle.propTypes = {
  props: PropTypes.string.isRequired,
}

export default MainTitle;
