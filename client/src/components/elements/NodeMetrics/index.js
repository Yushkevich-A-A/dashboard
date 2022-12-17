import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
const ColorText = styled.span`
  color: ${ props => {
    if (props.value > 95) {
      return css`red`;
    } else if (props.value > 85) {
      return css`yellow`;
    } else {
      return css`#00ff27`;
    }
  }}
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
        <Span>{
          (metrics && <ColorText value={metrics.cpu_utilization}>{metrics.cpu_utilization}</ColorText> ) || '...'}
        </Span>
        <Span>
          {(metrics && <ColorText value={metrics.memory_utilization}>{metrics.memory_utilization}</ColorText>) || '...'}
          </Span>
        <Span>
          {(metrics && <ColorText value={metrics.disk_utilization}>{metrics.disk_utilization}</ColorText>) || '...'}
        </Span>
      </Block>
    </Container>
  )
}

NodeMetrics.propTypes = {
  metrics: PropTypes.object,
}

export default NodeMetrics
