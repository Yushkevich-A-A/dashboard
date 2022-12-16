import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  align-items: stretch;
  color: white;
`
const Span = styled.div`
  font-weight: 400;
  font-size: 16px;
  &:nth-child( n + 2 ) {
    margin-top: 5px;
  }
`

const Block = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${ props => props.type };
`

const Line = styled.div`
  width: 1px;
  background-color: white;
  margin: 0 10px;
`

function NodeMetrics(props) {
  const { metrics } = props;

  return (
    <Container>
      <Block type='flex-end'>
        <Span>cpu</Span>
        <Span>memory</Span>
        <Span>disc</Span>
      </Block>
      <Line />
      <Block>
        <Span>{(metrics && metrics.cpu_utilization) || '...'}</Span>
        <Span>{(metrics && metrics.memory_utilization) || '...'}</Span>
        <Span>{(metrics && metrics.disk_utilization) || '...'}</Span>
      </Block>
    </Container>
  )
}

NodeMetrics.propTypes = {}

export default NodeMetrics
