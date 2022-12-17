import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  margin-left: 25px;
  margin-right: 25px;
`

function SectionBlock(props) {
  return (
    <Container>
      {
        props.children
      }
    </Container>
  )
}

export default SectionBlock;
