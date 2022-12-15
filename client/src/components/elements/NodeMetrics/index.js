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
  const { node_id } = props;
  return (
    <Container>
      <Block type='flex-end'>
        <Span>cpu</Span>
        <Span>memory</Span>
        <Span>disc</Span>
      </Block>
      <Line />
      <Block>
        <Span>{80 || '...'}</Span>
        <Span>{95 || '...'}</Span>
        <Span>{60 || '...'}</Span>
      </Block>
    </Container>
  )
}

NodeMetrics.propTypes = {}

export default NodeMetrics
