import React, { useEffect, useState } from 'react'
import InfoBlock from 'components/elements/InfoBlock'
import { useSelector } from 'react-redux'
import { getBadService } from 'lib';
import StatusBlock from 'components/elements/StatusBlock';

function StatusService() {
  const groups = useSelector( state => state.serviceProject );
  const [ status, setStatus ] = useState(null)
  
  useEffect( () => {
    if( groups.length === 0 ) {
      return;
    }

    const arrayStatuses = []
    groups.forEach( group => group.nodes.forEach( node => arrayStatuses.push(node.status_node) ) );

    setStatus( getBadService( arrayStatuses ) );
  }, [groups])

  return (
    <InfoBlock title='General Status Service'>
      {
        status && <StatusBlock status={status} />
      }
    </InfoBlock>
  )
}

export default StatusService
