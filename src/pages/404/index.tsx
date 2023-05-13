import { Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Text = styled.h1`
  color: ${({ theme }) => theme.purple};
`

const BackLink = styled(Link)`
  text-decoration: none;
  background: ${({ theme }) => theme['gray-dark']};
  color: ${({ theme }) => theme.white};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
`

export function NotFound() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={8}
        height="100vh"
      >
        <Text>Opps... Algo deu errado!</Text>
        <BackLink to="/home">Voltar</BackLink>
      </Grid>
    </Container>
  )
}
