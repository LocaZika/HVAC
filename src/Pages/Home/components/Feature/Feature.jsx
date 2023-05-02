import { Box, Container, Unstable_Grid2 as Grid, Link } from '@mui/material';
import './Feature.scss';
import FeatureItem from './FeatureItem';

const featureItems = [
  {
    title: 'engine',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-1.png',
  },
  {
    title: 'turbo',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-2.png',
  },
  {
    title: 'cooling',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-3.png',
  },
  {
    title: 'suspension',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-4.png',
  },
  {
    title: 'electrical',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-5.png',
  },
  {
    title: 'break',
    img: 'https://preview.colorlib.com/theme/hvac/img/feature/feature-6.png',
  },
]
export default function Feature() {
  return (
    <Box component={'section'} className='feature spad'>
      <Container disableGutters={true} fixed={true} >
        <Grid container>
          <Grid md={4} lg={4} paddingX={'15px'}>
            <Box className={'section-title feature__title'}>
              <Box component={'span'}>
                our features
              </Box>
              <Box component={'h2'}>we are a trusted name in auto</Box>
            </Box>
            <Box className={'feature__desc'}>
              <Box component={'p'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et
              </Box>
              <Box component={'p'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis.
              </Box>
            </Box>
            <Box className={'feature__link'}>
              <Link href='#' underline='none'>about us</Link>
              <Link href='#' underline='none' className='partners'>Our partners</Link>
            </Box>
          </Grid>
          <Grid md={4} mdOffset={4} lg={4} lgOffset={4} paddingX={'15px'}>
            <Grid container>
              <FeatureItem feature={featureItems} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
