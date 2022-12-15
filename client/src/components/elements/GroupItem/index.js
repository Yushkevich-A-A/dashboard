import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``

function GroupItem(props) {
  const { group } = props;
  return (
    <Container>
      {group.caption}
    </Container>
  )
}

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupItem
