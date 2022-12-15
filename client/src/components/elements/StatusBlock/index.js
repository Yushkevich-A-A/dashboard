import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import StatusIcon from 'components/elements/StatusIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${ props => props.revert && 'row-reverse' }
`

function StatusBlock(props) {
  const { status, revert } = props;
  return (
    <Container revert={revert}>
      <StatusIcon color={status.color} size={35} />
      {status.description}
    </Container>
  )
}

StatusBlock.propTypes = {
  status: PropTypes.object,
  revert: PropTypes.bool,
}

export default StatusBlock
