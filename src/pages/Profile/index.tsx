import { styled } from 'styled-components'
import { Repository } from '../../components/Repository'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

const Container = styled.div`
  background: #e2e8f0;
  width: 100%;
  height: calc(100vh);
`

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3.2rem;
  align-items: flex-start;
`

const Content = styled.main`
  background: #fff;
  padding: 2.4rem;
  border-radius: 0.4rem;
`

export function Profile() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar />

        <Content>
          <Repository />
          <Repository />
          <Repository />
          <Repository />
        </Content>
      </Wrapper>
    </Container>
  )
}
