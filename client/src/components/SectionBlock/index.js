import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
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

SectionBlock.propTypes = {}

export default SectionBlock
