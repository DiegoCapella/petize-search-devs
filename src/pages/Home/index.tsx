import { useState } from 'react'
import { Container, Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import img from '../../assets/Search d_evs.png'
import { Search } from '../../components/Search'
import { baseURL } from '../../config'
import { User } from '../../components/User'

export type UserProps = {
  avatar_url: string
  name: string
  login: string
}

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const getUser = async (username: string) => {
    setLoading(true)

    const response = await fetch(`${baseURL}/users/${username}`)

    const data = await response.json()

    setLoading(false)

    if (response.status === 404) {
      setError(true)
      setUser(null)
      return
    }

    setError(false)

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

        {loading && <CircularProgress />}

        {user && <User {...user} />}

        {error && <p>Usuário não encontrado.</p>}
      </Grid>
    </Container>
  )
}
