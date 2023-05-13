import { Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import img from '../../assets/Search d_evs.png'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.white};
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  padding: 0 3rem;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 1.8rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  text-decoration: none;
`

const LogoImg = styled.img`
  width: 19.4rem;
`

export function Header() {
  return (
    <Wrapper>
      <Container sx={{ padding: '2rem 0' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <LogoImg src={img} />

          <BackLink to="/home">Voltar</BackLink>
        </Box>
      </Container>
    </Wrapper>
  )
}
