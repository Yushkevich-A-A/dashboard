import React, { useEffect, useState } from 'react'
import InfoBlock from 'components/elements/InfoBlock'
import { useSelector } from 'react-redux';
import { getBadService } from 'lib';
import StatusBlock from 'components/elements/StatusBlock';

function StatusService() {
  const groups = useSelector( state => state.serviceProject );
  const filters = useSelector( state => state.serviceFilter );
  const [ status, setStatus ] = useState(null)
  
  useEffect( () => {
    if( groups.length === 0 ) {
      return;
    }
    const arrayStatuses = [];

    if( filters.group ) {
      filters.group.nodes.forEach( node => arrayStatuses.push(node.status_node) );
    } else {
      groups.forEach( group => group.nodes.forEach( node => arrayStatuses.push(node.status_node) ) );
    }

    setStatus( getBadService( arrayStatuses ) );
  }, [groups, filters])

  return (
    <InfoBlock title='Status service'>
      {
        status && <StatusBlock status={status} />
      }
    </InfoBlock>
  )
}

export default StatusService;
