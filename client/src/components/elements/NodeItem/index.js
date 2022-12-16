import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusIcon from 'components/elements/StatusIcon';
import NodeMetrics from 'components/elements/NodeMetrics';
import { useDispatch, useSelector } from 'react-redux';

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

  &:last-child {
    border-bottom: none;
  }
`

const Block = styled.div`
  display: flex;
  align-items: center;
`

function NodeItem(props) {
  const { node, metrics } = props;
  const groups = useSelector( state => state.serviceProject );
  const dispatch = useDispatch();
  
  const handleClick = () => {
    const selectedGroup = groups.find( group => {
      const findingNode = group.nodes.find( item => item.id === node.id );
      return !!findingNode;
    } )
    dispatch({type: 'SET_GROUP', payload: { group: selectedGroup }});
    dispatch({type: 'SET_NODE', payload: { node }});
  }

  return (
    <Container onClick={handleClick}>
      <Block >
        <StatusIcon color={node.status_node.color}/>
        {node.caption}
      </Block>
      <NodeMetrics metrics={metrics}/>
    </Container>
  )
}

NodeItem.propTypes = {
  node: PropTypes.object.isRequired,
}

export default NodeItem