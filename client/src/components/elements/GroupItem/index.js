import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #5CB6E9;
  cursor: pointer;
  &:nth-child( n + 2 ) {
    margin-top: 20px;
  }
`

function GroupItem(props) {
  const { group } = props;
  return (
    <Container >
      {group.caption}
    </Container>
  )
}

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupItem
