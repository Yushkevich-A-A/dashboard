import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import StatusIcon from 'components/elements/StatusIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
`

function StatusBlock(props) {
  const { status } = props;
  return (
    <Container>
      <StatusIcon color={status.color} size={35} />
      {status.description}
    </Container>
  )
}

StatusBlock.propTypes = {}

export default StatusBlock
