import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock';
import Text from 'components/elements/Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Administrators(props) {
  const { admin } = props;
  return (
    <InfoBlock title='Administrators'>
      {
        admin && <Container>
          <Text>{ `${admin.firstname} ${admin.lastname}`}</Text>
          <Text>{ admin.email}</Text>
        </Container>
      }
    </InfoBlock>
  )
}

Administrators.propTypes = {
  admin: PropTypes.object,
}

export default Administrators
