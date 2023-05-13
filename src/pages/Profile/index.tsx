import { styled } from 'styled-components'
import { Sidebar, SidebarUserProps } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { baseURL } from '../../config'

const Container = styled.div`
  background: #e2e8f0;
  width: 100%;
  height: calc(100vh);
`

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3.2rem;
  align-items: flex-start;
`

const Content = styled.main`
  background: #fff;
  padding: 2.4rem;
  border-radius: 0.4rem;
`

export function Profile() {
  const { username } = useParams()

  const [user, setUser] = useState<SidebarUserProps | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${baseURL}/users/${username}`)

      const data = await response.json()

      const {
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
      }: SidebarUserProps = data

      const dataUser: SidebarUserProps = {
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
      }

      setUser(dataUser)
    }

    getUser()
  }, [username])

  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar {...user} />

        <Content></Content>
      </Wrapper>
    </Container>
  )
}
