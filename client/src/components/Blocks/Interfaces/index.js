import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock'
import Text from 'components/elements/Text';
import StatusBlock from 'components/elements/StatusBlock';
import InfoText from 'components/elements/InfoText';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Interfaces(props) {
  const { node_interface } = props;
  return (
    <InfoBlock title='Interfaces'>
      {
        node_interface && node_interface.caption && <Container>
          <Text>{node_interface.caption}</Text>
          <StatusBlock revert={true} status={node_interface.status_interface}/>
        </Container>
      }
      {
        !node_interface && <InfoText text='узел не выбран' />
      }
    </InfoBlock>
  )
}

Interfaces.propTypes = {
  node_interface: PropTypes.object,
}

export default Interfaces