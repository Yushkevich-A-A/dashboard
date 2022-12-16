import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock';
import { useSelector } from 'react-redux';
import NodeItem from 'components/elements/NodeItem';
import CustomScroll from 'react-custom-scroll';

// const Container = styled.div`
//   height: 90vh;
//   overflow: scroll;
// `

function Nodes(props) {
  const groups = useSelector( state => state.serviceProject );
  const filter = useSelector( state => state.serviceFilter);
  const { metrics } = useSelector( state => state.serviceMetrics);
  const lastNodeMetrics = metrics[metrics.length - 1];
  const [ nodes, setNodes ] = useState([]);
  console.log( metrics);
  useEffect(() => {
    if (filter.group) {
      return setNodes([...filter.group.nodes]);
    }
    const arr = []
    groups.forEach( group => group.nodes.forEach( node => arr.push(node) ) );
    setNodes([...arr]);
  }, [groups, filter])

  return (
      <InfoBlock title='Nodes'>
         {/*<Container>
          <CustomScroll>  */}
            {
              nodes.map( node => <NodeItem key={node.id} metrics={lastNodeMetrics} node={node}/> )
            }
          {/* </CustomScroll>  
        </Container>*/}
      </InfoBlock>
  )
}

Nodes.propTypes = {}

export default Nodes;