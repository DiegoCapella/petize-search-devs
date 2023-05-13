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

const FollowItem = styled.div`
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

export function Sidebar() {
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
          <img
            src="https://avatars.githubusercontent.com/u/30079414?s=400&u=f84b2b7f557b2307283f40e7f4750bbcec7d0f1f&v=4"
            alt=""
          />
          <div>
            <strong>Diego Silva</strong>
            <span>@diego.silva</span>
          </div>
        </Avatar>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>

        <ItemGroup>
          <FollowItem>
            <GroupsIcon />

            <p>
              <span>240</span> seguidores
            </p>
          </FollowItem>

          <FollowItem>
            <FavoriteBorderIcon />
            <p>
              <span>24</span> seguindo
            </p>
          </FollowItem>
        </ItemGroup>

        <ItemGroup>
          <LinkItem to="/">
            <ApartmentIcon /> <p>Petize</p>
          </LinkItem>
          <LinkItem to="/">
            <LocationOnOutlinedIcon /> <p>São Paulo</p>
          </LinkItem>
          <LinkItem to="/">
            <MailOutlinedIcon /> <p>diego@petize.com.br</p>
          </LinkItem>
          <LinkItem to="/">
            <LinkIcon /> <p>www.diegosilva.com.br</p>
          </LinkItem>
          <LinkItem to="/">
            <TwitterIcon /> <p>@diegosilva</p>
          </LinkItem>
        </ItemGroup>
      </Box>

      <ContactButton>Contato</ContactButton>
    </Box>
  )
}
