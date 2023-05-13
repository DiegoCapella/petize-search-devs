import { styled } from 'styled-components'
import { Sidebar, SidebarUserProps } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { baseURL } from '../../config'
import { Repository, RepositoryProps } from '../../components/Repository'
import { CircularProgress } from '@mui/material'
import media from 'styled-media-query'

const Container = styled.div`
  background: #e2e8f0;
  width: 100%;
  min-height: 100vh;
`

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3.2rem;
  align-items: flex-start;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

const Content = styled.main`
  background: #fff;
  padding: 2.4rem;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
`

const Loading = styled.div`
  text-align: center;
`

export function Profile() {
  const { username } = useParams()

  const [user, setUser] = useState<SidebarUserProps | null>(null)
  const [repository, setRepository] = useState<[] | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${baseURL}/users/${username}`)

      const data = await response.json()

      setUser(data)
    }

    getUser()

    const getRepository = async () => {
      setLoading(true)

      const response = await fetch(`${baseURL}/users/${username}/repos`)

      const data = await response.json()

      setLoading(false)

      let orderRepo = data.sort(
        (a: RepositoryProps, b: RepositoryProps) =>
          b.stargazers_count - a.stargazers_count
      )

      orderRepo = orderRepo.slice(0, 6)

      setRepository(orderRepo)
    }

    getRepository()
  }, [username])

  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar {...user!} />

        <Content>
          {loading && (
            <Loading>
              <CircularProgress />
            </Loading>
          )}
          {repository?.map((repo: RepositoryProps) => (
            <Repository key={repo.name} {...repo} />
          ))}
        </Content>
      </Wrapper>
    </Container>
  )
}
