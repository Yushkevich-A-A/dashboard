import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock';
import GroupItem from 'components/elements/GroupItem';
import { useSelector } from 'react-redux';
import NodeItem from 'components/elements/NodeItem';

const Container = styled.div`
  height: 100%;
`

function Nodes(props) {
  const groups = useSelector( state => state.serviceProject );
  const [ nodes, setNodes ] = useState([])

  useEffect(() => {
    groups.map( group => setNodes( state => [ ...state, ...group.nodes ] ) );
  }, [groups])
  

  return (
      <InfoBlock title='Nodes'>
        {
          nodes.map( node => <NodeItem key={node.id} node={node}/> )
        }
      </InfoBlock>
  )
}

Nodes.propTypes = {}

export default Nodes;