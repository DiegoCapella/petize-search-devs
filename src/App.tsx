import { Container } from '@mui/material'
import { styled } from 'styled-components'

const TitleApp = styled.h1`
  color: ${({ theme }) => theme.purple};
  text-align: center;
`

export function App() {
  return (
    <Container>
      <TitleApp>App</TitleApp>
    </Container>
  )
}
