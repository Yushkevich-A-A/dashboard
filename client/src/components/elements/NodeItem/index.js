import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusIcon from 'components/elements/StatusIcon';
import NodeMetrics from 'components/elements/NodeMetrics';

const Container = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #5CB6E9;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #716969;
  padding: 0 10px 15px;
  &:nth-child( n + 2 ) {
    margin-top: 20px;
  }
`

const Block = styled.div`
  display: flex;
  align-items: center;
`

function NodeItem(props) {
  const { node } = props;
  return (
    <Container >
      <Block >
        <StatusIcon color={node.status_node.color}/>
        {node.caption}
      </Block>
      <NodeMetrics />
    </Container>
  )
}

NodeItem.propTypes = {
  node: PropTypes.object.isRequired,
}

export default NodeItem