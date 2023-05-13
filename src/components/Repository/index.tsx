import { Grid } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled(Link)`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
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

export type RepositoryProps = {
  name: string
  html_url: string
  description: string
  stargazers_count: number
  updated_at: string
}

export function Repository({
  name,
  html_url,
  description,
  stargazers_count,
  updated_at
}: RepositoryProps) {
  const date = new Date(updated_at)
  const dateFormat = new Intl.DateTimeFormat('pt-BR').format(date)

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      gap={1.6}
      style={{
        background: '#fff',
        borderBottom: '1px solid #E2E8F0',
        paddingBottom: '1.6rem',
        marginBottom: '1.6rem'
      }}
    >
      <Title to={html_url} target="_blank">
        {name}
      </Title>

      <TextDescription>{description}</TextDescription>

      <Details>
        <StarOutlineIcon fontSize="large" style={{ color: '#4A5568' }} />{' '}
        <p>{stargazers_count}</p> <span>•</span>
        <p>Atualizado em: {dateFormat}</p>
      </Details>
    </Grid>
  )
}
