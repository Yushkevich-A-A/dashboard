import React, { useEffect, useState } from 'react';
import './style.css';
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock';
import { useSelector } from 'react-redux';
import NodeItem from 'components/elements/NodeItem';
import { Scrollbars } from 'react-custom-scrollbars';

const Container = styled.div`
  height: calc( 100vh - 150px );
`
const WrapperNodeContainer = styled.div`
  padding: 20px;
`

function Nodes() {
  const groups = useSelector( state => state.serviceProject );
  const filter = useSelector( state => state.serviceFilter);
  const { metrics } = useSelector( state => state.serviceMetrics);
  const [ nodes, setNodes ] = useState([]);

  useEffect(() => {
    if (filter.group) {
      return setNodes([...filter.group.nodes]);
    }
    const arr = []
    groups.forEach( group => group.nodes.forEach( node => arr.push(node) ) );
    setNodes([...arr]);
  }, [groups, filter])

  return (
      <InfoBlock title='Nodes' withoutPadding={true}>
        <Container>
          <Scrollbars 
          style={{ height: '100%' }}
          renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
          > 
            <WrapperNodeContainer>
            {
              nodes.map( node => <NodeItem key={node.id} metrics={
                metrics.filter( item => item.node_id === node.id )
              } node={node}/> )
            }
            </WrapperNodeContainer>
          </Scrollbars>
        </Container>
      </InfoBlock>
  )
}

export default Nodes;