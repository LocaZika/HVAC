import { Box, Grid } from '@mui/material';
import './Home.scss';
import Hero from './Hero/Hero';

export default function Home() {
  return (
    <Grid className='home'>
      <Box component={'section'} className="hero">
        <Hero />
      </Box>
      <Box component={'section'} className="service">
      </Box>
      <Box component={'section'} className="feature">
      </Box>
      <Box component={'section'} className="car">
      </Box>
      <Box component={'section'} className="chooseus">
      </Box>
      <Box component={'section'} className="latest">
      </Box>
      <Box component={'section'} className="cta">
      </Box>
    </Grid>
  )
}
