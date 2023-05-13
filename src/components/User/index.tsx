import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { UserProps } from '../../pages/Home'

const ProfileButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.8rem;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 1.8rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  text-decoration: none;
`

const Avatar = styled.div`
  display: flex;
  gap: 1.6rem;

  img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    strong {
      color: ${({ theme }) => theme.dark};
    }

    span {
      color: ${({ theme }) => theme['gray-light']};
    }
  }
`

export function User({ avatar_url, name, login }: UserProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem',
        borderRadius: '0.6rem',
        width: '240px',
        background: '#FCFCFC',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }}
    >
      <Avatar>
        <img src={avatar_url} />
        <div>
          <strong>{name}</strong>
          <span>{login}</span>
        </div>
      </Avatar>

      <ProfileButton to={`/perfil/${login}`}>Ver perfil</ProfileButton>
    </Box>
  )
}
