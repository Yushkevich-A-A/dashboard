import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #5CB6E9;
`

function Text(props) {
  return (
    <Container>
      { props.children }
    </Container>
  )
}

export default Text;
