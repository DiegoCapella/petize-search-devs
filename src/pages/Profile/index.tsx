import { styled } from 'styled-components'
import { Repository } from '../../components/Repository'

const Container = styled.div`
  background: #fcfcfc;
  width: 100%;
  height: 100vh - 8rem;
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

export function Profile() {
  return (
    <Container>
      <Wrapper>
        <div>Sidebar</div>

        <main>
          <Repository />
          <Repository />
          <Repository />
          <Repository />
        </main>
      </Wrapper>
    </Container>
  )
}
