import { Grid } from '@mui/material';
import './Home.scss';
import Hero from './components/Hero';

export default function Home() {
  return (
    <Grid className='home'>
      <section className="hero">
        <Hero />
      </section>
    </Grid>
  )
}
