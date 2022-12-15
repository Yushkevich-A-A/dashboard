import React from 'react';
import PropTypes from 'prop-types';
import SectionBlock from 'components/elements/SectionBlock';
import StatusService from 'components/Blocks/StatusService';
import GeneralInformation from 'components/Blocks/GeneralInformation';
import Groups from 'components/Blocks/Groups';

function FirstSection(props) {
  return (
    <SectionBlock>
      <StatusService />
      <GeneralInformation />
      <Groups />
    </SectionBlock>
  )
}

FirstSection.propTypes = {}

export default FirstSection;
