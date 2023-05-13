import { useState } from 'react'
import { styled } from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 1rem;

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  `}
`

const SearchButton = styled.button`
  width: 17.6rem;
  height: 4.8rem;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 1.8rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
`

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  width: 17.6rem;
  height: 4.8rem;
  padding: 1rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme['gray-dark']};
  border: solid 1px ${({ theme }) => theme['gray-light']};
  border-radius: 0.6rem;

  &:focus {
    outline: none;
    border: solid 1px ${({ theme }) => theme.purple};
  }
`

type SearchProps = {
  // eslint-disable-next-line no-unused-vars
  searchUser: (username: string) => Promise<void>
}

export function Search({ searchUser }: SearchProps) {
  const [username, setUsername] = useState('')

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      searchUser(username)
    }
  }

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={(event) => setUsername(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event.key)}
      />
      <SearchButton onClick={() => searchUser(username)}>Search</SearchButton>
    </Wrapper>
  )
}
