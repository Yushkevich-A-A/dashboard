import React from 'react';
import PropTypes from 'prop-types';
import SectionBlock from 'components/elements/SectionBlock';
import Nodes from 'components/Blocks/Nodes';

function SecondSection(props) {
  return (
    <SectionBlock>
      <Nodes />
    </SectionBlock>
  )
}

SecondSection.propTypes = {}

export default SecondSection;