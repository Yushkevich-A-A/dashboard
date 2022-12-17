import React from 'react';
import SectionBlock from 'components/elements/SectionBlock';
import StatusService from 'components/Blocks/StatusService';
import GeneralInformation from 'components/Blocks/GeneralStatusService';
import Groups from 'components/Blocks/Groups';

function FirstSection() {
  return (
    <SectionBlock>
      <StatusService />
      <GeneralInformation />
      <Groups />
    </SectionBlock>
  )
}

export default FirstSection;
