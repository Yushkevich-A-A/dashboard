import React from 'react'
import styled from 'styled-components';
import MainTitle from 'components/elements/MainTitle';
import SecondSection from 'components/Sections/SecondSection';
import ThirstSection from 'components/Sections/ThirstSection';
import FirstSection from 'components/Sections/FirstSection';

const Container = styled.div``
const Content = styled.div`
  display: flex;
  justify-content: center;
`

function MainPage() {
  return (
    <Container>
        <MainTitle title='Dashboard' />
        <Content>
          <FirstSection />
          <SecondSection />
          <ThirstSection />
        </Content>
    </Container>
  )
}

export default MainPage
