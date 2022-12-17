import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #5CB6E9;
  cursor: pointer;
  padding: 5px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: border 0.2s;
  background-color: ${
    props => props.selected &&  css`rgba( 118, 118, 118, 0.2 )`
 };
  &:hover {
    border-color: grey;
  }
  
  &:nth-child( n + 2 ) {
    margin-top: 20px;
  }
`

function GroupItem(props) {
  const { group } = props;
  const { group: selected_group }= useSelector( state => state.serviceFilter );
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch({type: 'SET_GROUP', payload: {group} });
  }

  return (
    <Container 
      onClick={handlerClick}
      selected={selected_group && selected_group.id === group.id}
    >
      {group.caption}
    </Container>
  )
}

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupItem
