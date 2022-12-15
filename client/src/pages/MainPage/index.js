import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import MainTitle from 'components/elements/MainTitle';
import InfoBlock from 'components/InfoBlock';
import SectionBlock from 'components/SectionBlock';

const Container = styled.div``
const Content = styled.div`
  display: flex;
  justify-content: center;
`

function MainPage(props) {
  return (
    <Container>
        <MainTitle title='Dashboard' />
        <Content>
          <SectionBlock title='Status Service'/>
          <SectionBlock title='Nodes'/>
          <SectionBlock title='Metrics'/>
        </Content>
    </Container>
  )
}

MainPage.propTypes = {}

export default MainPage
