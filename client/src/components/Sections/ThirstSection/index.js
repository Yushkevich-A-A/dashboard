import React from 'react';
import PropTypes from 'prop-types';
import SectionBlock from 'components/elements/SectionBlock';
import Metrics from 'components/Blocks/Metrics';
import Interfaces from 'components/Blocks/Interfaces';
import Administrators from 'components/Blocks/Administrators';
import Applications from 'components/Blocks/Applications';
import { useSelector } from 'react-redux';

function ThirstSection(props) {
  const { node } = useSelector( state => state.serviceFilter );

  return (
    <SectionBlock>
      <Metrics />
      <Interfaces node_interface={node && node.interface}/>
      <Administrators admin={node && node.admin}/>
      <Applications />
    </SectionBlock>
  )
}

ThirstSection.propTypes = {}

export default ThirstSection;