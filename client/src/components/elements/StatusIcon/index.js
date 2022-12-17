import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Container = styled.div`
  width: ${props => props.size || '25'}px;
  height: ${props => props.size || '25'}px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  background-color: ${ props => props.color};
  box-shadow: 0px 0px 6px #ffffff;
`

function StatusIcon(props) {
  const { color, size } = props;

  return (
    <Container color={color} size={size} />
  )
}

StatusIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default StatusIcon;
