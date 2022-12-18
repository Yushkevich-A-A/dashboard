import React from 'react'
import PropTypes from 'prop-types';
import InfoBlock from 'components/elements/InfoBlock'
import Text from 'components/elements/Text';
import InfoText from 'components/elements/InfoText';

function Applications(props) {
  const { applications } = props;
  return (
    <InfoBlock title='Applications'>
      {
        applications && applications.map(
          (item, index) => <Text key={item.id}>{item.caption} { (index !== applications.length - 1 )&& ',' }</Text>
        )
      }
      {
        !applications && <InfoText text='узел не выбран' />
      }
    </InfoBlock>
  )
}

Applications.propTypes = {
  applications: PropTypes.array,
}

export default Applications
