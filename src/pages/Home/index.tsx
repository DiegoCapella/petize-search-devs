import { Container, Grid } from '@mui/material'
import img from '../../assets/Search d_evs.png'
import { Search } from '../../components/Search'

export function Home() {
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
        <Search />
      </Grid>
    </Container>
  )
}
