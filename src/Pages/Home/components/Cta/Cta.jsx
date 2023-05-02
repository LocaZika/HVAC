import { Box, Container, Grid } from '@mui/material';
import './Cta.scss';

export default function Cta() {
  return (
    <Box component={'section'} className='cta'>
      <Container fixed>
        <Grid container>
          <Grid item sm={12} md={6} lg={6} paddingX={'15px'}>
            <Box className='cta__item set-bg' sx={{
              backgroundImage: 'url(https://preview.colorlib.com/theme/hvac/img/cta/cta-1.jpg)',
            }} >
              <Box component={'h4'}>do you want buy a car</Box>
              <Box component={'p'}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} lg={6} paddingX={'15px'}>
            <Box className='cta__item set-bg' sx={{
              backgroundImage: 'url(https://preview.colorlib.com/theme/hvac/img/cta/cta-2.jpg)',
            }}>
              <Box component={'h4'}>do you want rent a car</Box>
              <Box component={'p'}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
