import { Box } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ApartmentIcon from '@mui/icons-material/Apartment'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import LinkIcon from '@mui/icons-material/Link'
import TwitterIcon from '@mui/icons-material/Twitter'

import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const ContactButton = styled.button`
  width: 100%;
  height: 4.8rem;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 1.8rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
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

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme['gray-dark']};
  }
`

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme['gray-dark']};
  }
`

export type SidebarUserProps = {
  name: string
  avatar_url: string
  login: string
  bio: string
  email: string
  followers: string
  following: string
  company: string
  location: string
  twitter_username: string
  blog: string
}

export function Sidebar({
  avatar_url,
  name,
  login,
  bio,
  email,
  following,
  followers,
  company,
  blog,
  location,
  twitter_username
}: SidebarUserProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        padding: '1.6rem',
        background: '#fff',
        borderRadius: '0.4rem'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
        <Avatar>
          <img src={avatar_url} />
          <div>
            <strong>{name}</strong>
            <span>{login}</span>
          </div>
        </Avatar>

        <p>{bio}</p>

        <ItemGroup>
          <ProfileItem>
            <GroupsIcon />

            <p>
              <span>{followers}</span> seguidores
            </p>
          </ProfileItem>

          <ProfileItem>
            <FavoriteBorderIcon />
            <p>
              <span>{following}</span> seguindo
            </p>
          </ProfileItem>
        </ItemGroup>

        <ItemGroup>
          <ProfileItem>
            {company && (
              <>
                <ApartmentIcon /> <p>{company}</p>
              </>
            )}
          </ProfileItem>
          <ProfileItem>
            {location && (
              <>
                <LocationOnOutlinedIcon /> <p>{location}</p>
              </>
            )}
          </ProfileItem>
          <LinkItem to="/">
            {email && (
              <>
                <MailOutlinedIcon /> <p>{email}</p>
              </>
            )}
          </LinkItem>
          <LinkItem to={blog} target="_blank">
            {blog && (
              <>
                <LinkIcon /> <p style={{ fontSize: '13px' }}>{blog}</p>
              </>
            )}
          </LinkItem>
          <LinkItem
            to={`https://twitter.com/${twitter_username}`}
            target="_blank"
          >
            {twitter_username && (
              <>
                <TwitterIcon /> <p>{twitter_username}</p>
              </>
            )}
          </LinkItem>
        </ItemGroup>
      </Box>

      <ContactButton>Contato</ContactButton>
    </Box>
  )
}
