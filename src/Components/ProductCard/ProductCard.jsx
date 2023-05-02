import './ProductCard.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, CardActions, CardContent, Typography, Grid, Box } from "@mui/material";
import { Link } from 'react-router-dom';

export default function ProductCard({products}) {
  return (
    products.map(({
      id,
      name,
      images,
      price,
      horsePower,
      mpg,
      yearOfManufacture,
      status,
      gearboxType,
    }) => (
      <Grid key={id} item sm={6} md={4} lg={3} className='product-card'>
        <Card sx={{ maxWidth: 345, }}>
          <Carousel
            showThumbs={false}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
            infiniteLoop={true}
            showArrows={false}
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt='product-img' width={100} />
            ))}
          </Carousel>
          <CardContent>
            <Typography
              component={'div'}
              fontSize={'13px'}
              color={'#323232'}
              fontWeight={700}
              padding={'2px 15px 1px'}
              border={'1px solid #ebebeb'}
              borderRadius={'2px'}
              width={'62px'}
            >
              {yearOfManufacture}
            </Typography>
            <Typography
              gutterBottom
              component={'h5'}
              textTransform={'capitalize'}
              margin={'10px 0 14px 0'}
              fontSize={'18px'}
              minHeight={'54px'}
            >
              <Link
                to={`products/detail:${id}`}
                className='product-card__title'
              >{name}</Link>
            </Typography>
            <Box
              component={'ul'}
              className='product-card__info'
            >
              <Box component={'li'}>
                <Box component={'span'}>{mpg}</Box>
                &nbsp;mi
              </Box>
              <Box component={'li'}>
                <Box component={'span'} textTransform={'capitalize'}>{gearboxType}</Box>
              </Box>
              <Box component={'li'}>
                <Box component={'span'}>{horsePower}</Box>
                &nbsp;hp
              </Box>
            </Box>
          </CardContent>
          <CardActions className='product-card__price'>
            {
              status === 'sale' ? (
                <Link to={`products/detail:${id}`}
                  className='product-card__price__option sale'
                >for sale</Link>
              ) : (
                <Link to={`products/detail:${id}`}
                  className='product-card__price__option'
                >for rent</Link>
              )
            }
            <Box
              component={'h6'}
              fontSize='15px'
              color='#db2d2e'
              fontWeight={700}
              width={'100%'}
            >
              ${price}
              {
                status === 'rent' ? (
                  <Box
                    component={'span'}
                    color='#727171'
                    fontSize='13px'
                    fontWeight={400}
                    textTransform={'capitalize'}
                  >/month</Box>
                ) : null
              }
            </Box>
          </CardActions>
        </Card>
      </Grid>
    ))
  )
}
