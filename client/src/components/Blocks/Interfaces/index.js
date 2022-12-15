import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock'
import Text from 'components/elements/Text';
import StatusBlock from 'components/elements/StatusBlock';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Interfaces(props) {
  const { node_interface } = props;
  console.log(node_interface);
  return (
    <InfoBlock title='Interfaces'>
      {
        node_interface && <Container>
          <StatusBlock status={node_interface.status_interface}/>
          <Text>{node_interface.caption}</Text>
        </Container>
      }
    </InfoBlock>
  )
}

Interfaces.propTypes = {}

export default Interfaces