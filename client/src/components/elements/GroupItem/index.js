import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch({type: 'SET_GROUP', payload: {group} });
  }

  return (
    <Container onClick={handlerClick}>
      {group.caption}
    </Container>
  )
}

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupItem
