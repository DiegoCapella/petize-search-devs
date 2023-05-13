import { Grid } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { styled } from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.dark};
`

const TextDescription = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme['gray-dark']};
`

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme['gray-dark']};
  }
`

export function Repository() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      gap={1.6}
      style={{
        background: '#fff',
        borderBottom: '1px solid #E2E8F0',
        paddingBottom: '1.6rem',
        marginBottom: '1.6rem'
      }}
    >
      <Title>Repositório nome</Title>

      <TextDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </TextDescription>

      <Details>
        <StarOutlineIcon fontSize="large" style={{ color: '#4A5568' }} />{' '}
        <p>100</p> <span>•</span>
        <p>Atualizado há 2 dias</p>
      </Details>
    </Grid>
  )
}
