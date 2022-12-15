import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfoBlock from 'components/elements/InfoBlock';
import { useSelector } from 'react-redux';
import NodeItem from 'components/elements/NodeItem';

function Nodes(props) {
  const groups = useSelector( state => state.serviceProject );
  const [ nodes, setNodes ] = useState([]);

  useEffect(() => {
    const arr = []
    groups.forEach( group => group.nodes.forEach( node => arr.push(node) ) );
    setNodes([...arr]);
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