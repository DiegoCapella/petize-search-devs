import { Container, Grid } from '@mui/material'

import img from '../../assets/Search d_evs.png'
import { Search } from '../../components/Search'
import { baseURL } from '../../config'
import { useState } from 'react'
import { User } from '../../components/User'

export type UserProps = {
  avatar_url: string
  name: string
  login: string
}

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null)

  const getUser = async (username: string) => {
    const response = await fetch(`${baseURL}/users/${username}`)

    const data = await response.json()

    const { avatar_url, name, login }: UserProps = data

    const dataUser: UserProps = {
      avatar_url,
      name,
      login
    }

    setUser(dataUser)
  }

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
        <img src={img} />
        <Search searchUser={getUser} />

        {user && <User {...user} />}
      </Grid>
    </Container>
  )
}
