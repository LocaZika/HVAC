import { Box, Unstable_Grid2 as Grid } from "@mui/material";


export default function FeatureItem({feature}) {
  return (
    <>
      {
        feature.map(({title, img}, index) => (
          <Grid key={index} sm={4} md={6} lg={6} className='feature__item'>
            <Box className='feature__item__icon' >
              <Box component={'img'} src={img}></Box>
            </Box>
            <Box component={'h6'}>{title}</Box>
          </Grid>
        ))
      }
    </>
  )
}
