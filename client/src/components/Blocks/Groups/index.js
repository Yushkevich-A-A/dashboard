import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoBlock from 'components/InfoBlock';
import GroupItem from 'components/elements/GroupItem';

const Container = styled.div`
  height: 100%;
`

function Groups(props) {
  const groups = useSelector( state => state.serviceProject );


  return (
      <InfoBlock title='Groups'>
        {
          groups.map( group => <GroupItem key={group.id} group={group}/> )
        }
      </InfoBlock>
  )
}

Groups.propTypes = {}

export default Groups;
