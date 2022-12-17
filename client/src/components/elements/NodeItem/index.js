import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  border: 2px solid transparent;
  padding: 10px 10px 10px 5px;
  min-width: 200px;
  border-radius: 5px;
  transition: border 0.2s;
  background-color: ${
     props => props.selected &&  css`rgba( 118, 118, 118, 0.2 )`
  };

  &:hover {
    border-color: grey;
  }
`

function NodeItem(props) {
  const { node, metrics } = props;
  const groups = useSelector( state => state.serviceProject );
  const { node: selected_node }= useSelector( state => state.serviceFilter );
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
      <Block selected={selected_node && selected_node.id === node.id}>
        <StatusIcon color={node.status_node.color}/>
        {node.caption}
      </Block>
      <NodeMetrics metrics={metrics && metrics[metrics.length - 1]}/>
    </Container>
  )
}

NodeItem.propTypes = {
  node: PropTypes.object.isRequired,
  metrics: PropTypes.object,
}

export default NodeItem