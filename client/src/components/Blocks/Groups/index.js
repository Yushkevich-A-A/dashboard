import React from 'react';
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock';
import GroupItem from 'components/elements/GroupItem';
import { useDispatch, useSelector } from 'react-redux';

const ResetFilter = styled.div`
  border-top: 1px solid #716969;
  margin-top: 10px; 
  padding-top: 10px; 
  height: 24px;
  text-align: right;
`

const ResetFilterSpan = styled.span`
  color: #5CB6E9;
  cursor: pointer;
`

function Groups() {
  const groups = useSelector( state => state.serviceProject );
  const filter = useSelector( state => state.serviceFilter );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({type: 'RESET_FILTERS'});
  }

  return (
      <InfoBlock title='Groups'>
        {
          groups
            .filter( group => !(filter.node && !group.nodes.find( item => item.id === filter.node.id )))
            .map( group => <GroupItem key={group.id} group={group}/> )
        }
        <ResetFilter>
          {
            (filter.group || filter.node) && <ResetFilterSpan onClick={handleClick}>сбросить фильтры</ResetFilterSpan>
          }
        </ResetFilter>
      </InfoBlock>
  )
}

export default Groups;
