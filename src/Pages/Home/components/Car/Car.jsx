import { Box, Container, Grid, Tab, Tabs } from '@mui/material';
import './Car.scss';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { ProductCard } from '../../../../Components';

const allyProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container>
          {children}
        </Grid>
      )}
    </div>
  )
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const products = [
  {
    id: 1,
    name: 'mercedes g63',
    brand: 'mercedes-benz',
    price: 1400,
    gearboxType: 'auto',
    horsePower: 700,
    mpg: 3500,
    yearOfManufacture: 2016,
    status: 'sale',
    images: [
      'https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg',
    ],
  },
  {
    id: 2,
    name: 'lamborghini aventardo a90',
    brand: 'lamborghini',
    price: 422,
    gearboxType: 'auto',
    horsePower: 700,
    mpg: 3500,
    yearOfManufacture: 2020,
    status: 'rent',
    images: [
      'https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg',
    ],
  },
  {
    id: 3,
    name: 'porsche cayenne turbo s',
    brand: 'porsche',
    price: 730900,
    gearboxType: 'auto',
    horsePower: 700,
    mpg: 3500,
    yearOfManufacture: 2017,
    status: 'sale',
    images: [
      'https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg',
    ],
  },
  {
    id: 4,
    name: 'Bmw s1000rr 2019 m',
    brand: 'BMW',
    price: 736500,
    gearboxType: 'auto',
    horsePower: 700,
    mpg: 3500,
    yearOfManufacture: 2017,
    status: 'sale',
    images: [
      'https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg',
    ],
  },
  {
    id: 5,
    name: 'Lamborghini huracan evo',
    brand: 'lamborghini',
    price: 730900,
    gearboxType: 'auto',
    horsePower: 700,
    mpg: 3500,
    yearOfManufacture: 2017,
    status: 'rent',
    images: [
      'https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg',
    ],
  },
  {
    id: 6,
    name: 'Mustang shelby gt500',
    brand: 'ford',
    price: 6500,
    gearboxType: 'auto',
    horsePower: 700,
    mpg: 3500,
    yearOfManufacture: 2017,
    status: 'rent',
    images: [
      'https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg',
      'https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg',
    ],
  },
];
export default function Car() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTab = (e, newvalue) => {
    setActiveTab(newvalue);
  }
  const saleProducts = products.filter(product => product.status === 'sale');
  return (
    <Box component={'section'} className='car spad'>
      <Container fixed>
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item lg={12}>
            <Box className='section-title car__title'>
              <Box component={'span'}>our car</Box>
              <Box component={'h2'}>best vehicle offers</Box>
            </Box>
            <Box className='car__filter'>
              <Tabs value={activeTab} onChange={handleChangeTab} sx={{
                marginBottom: '40px',
              }}>
                <Tab label='most researched' {...allyProps(0)} />
                <Tab label='lastest on sale' {...allyProps(1)} />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        <Grid container >
          <TabPanel value={activeTab} index={0}>
            <ProductCard products={products} />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <ProductCard products={saleProducts} />
          </TabPanel>
        </Grid>
      </Container>
    </Box>
  )
}
