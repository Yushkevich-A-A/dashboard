import React from 'react';
import PropTypes from 'prop-types';
import SectionBlock from 'components/elements/SectionBlock';
import Metrics from 'components/Blocks/Metrics';
import Interfaces from 'components/Blocks/Interfaces';
import Administrators from 'components/Blocks/Administrators';
import Applications from 'components/Blocks/Applications';

function ThirstSection(props) {
  return (
    <SectionBlock>
      <Metrics />
      <Interfaces />
      <Administrators />
      <Applications />
    </SectionBlock>
  )
}

ThirstSection.propTypes = {}

export default ThirstSection;