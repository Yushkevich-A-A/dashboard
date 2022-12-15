import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoBlock from 'components/elements/InfoBlock'
import Text from 'components/elements/Text';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function Applications(props) {
  const { applications } = props;
  return (
    <InfoBlock title='Applications'>
      {
        applications && applications.map(
          item => <Text key={item.id}>{item.caption} ,</Text>
        )
      }
    </InfoBlock>
  )
}

Applications.propTypes = {
  applications: PropTypes.array,
}

export default Applications
