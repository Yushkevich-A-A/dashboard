import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Contaiter = styled.h2`
  padding: 15px 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  border-bottom: 1px solid #6798A8;
`

function Title(props) {
  const { title } = props;
  return (
    <Contaiter>{title}</Contaiter>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title;
