import './ProductCard.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

export default function ProductCard({products}) {
  return (
    products.map(({id, name, images}) => (
      <Card key={id} sx={{ maxWidth: 345 }}>
        <Carousel
          showThumbs={false}
          swipeable={true}
          dynamicHeight={true}
          emulateTouch={true}
          infiniteLoop={true}
        >
          {images.map(({id, src}) => (
            <img key={id} src={src} alt='product-img' width={100} />
          ))}
        </Carousel>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    ))
  )
}
