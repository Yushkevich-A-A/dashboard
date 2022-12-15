import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusIcon from 'components/elements/StatusIcon';

const Container = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #5CB6E9;
  cursor: pointer;
  display: flex;
  &:nth-child( n + 2 ) {
    margin-top: 20px;
  }
`

function NodeItem(props) {
  const { node } = props;
  return (
    <Container >
      <StatusIcon color={node.status_node.color}/>
      {node.caption}
    </Container>
  )
}

NodeItem.propTypes = {
  node: PropTypes.object.isRequired,
}

export default NodeItem