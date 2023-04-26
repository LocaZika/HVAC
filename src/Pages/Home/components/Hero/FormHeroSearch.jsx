import { Box, Button, FormControl, FormGroup, Grid, MenuItem, Select, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { formHeroSlice, formHeroState } from './formHeroSlice';
import FormHeroSelect from "./FormHeroSelect";
import { useState } from "react";

const db = {
  years: {
    title: 'select year',
    values: [2020, 2019, 2018, 2017, 2016, 2015]
  },
  brands: {
    title: 'select brand',
    values:['audi', 'lamborghini', 'bugatti', 'BWM']
  },
  models: {
    title: 'select model',
    values: ['q3', 'q4', 'aventador']
  },
  mileage: {
    title: 'select miles',
    values: [27, 25, 15, 10]
  },
}
export default function FormHeroSearch() {
  // const {year, brand, model, mileage} = useSelector(formHeroState);
  const [sliderValue, setSliderValue] = useState([1000, 2000]);
  const dispatch = useDispatch();
  const {
    changeYear,
    changeBrand,
    changeMileage,
    changeModel
  } = formHeroSlice.actions;
  const selectYear = (e) => {
    dispatch(changeYear(e.target.value));
  };
  const selectBrand = (e) => {
    dispatch(changeBrand(e.target.value));
  };
  const selectModel = (e) => {
    dispatch(changeModel(e.target.value));
  };
  const selectMileage = (e) => {
    dispatch(changeMileage(e.target.value));
  };
  const selectFuncs = [selectYear, selectBrand, selectModel, selectMileage];
  const handleSlider = (e, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <FormGroup>
      <Grid container className="hero__tab-panel__form">
        <Grid item className="hero__tab-panel__form--listitem">
          {/* <FormControl className="select__form">
            <Box component={'p'}>select year</Box>
            <Select
              value={year}
              onChange={selectYear}
              className="select__form__box"
            >
              <MenuItem value=''>Select Year</MenuItem>
              {
                db.years.map((year, index) => (
                  <MenuItem key={index} value={`${year}`}>{year}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl className="select__form">
            <Box component={'p'}>select brand</Box>
            <Select
              value={brand}
              onChange={selectBrand}
              className="select__form__box"
            >
              <MenuItem value=''>Select brand</MenuItem>
              {
                db.brands.map((brand, index) => (
                  <MenuItem key={index} value={`${brand}`}>{brand}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl className="select__form">
            <Box component={'p'}>select model</Box>
            <Select
              value={model}
              onChange={selectModel}
              className="select__form__box"
            >
              <MenuItem value=''>Select model</MenuItem>
              {
                db.models.map((model, index) => (
                  <MenuItem key={index} value={`${model}`}>{model}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl className="select__form">
            <Box component={'p'}>select mileage</Box>
            <Select
              value={mileage}
              onChange={selectMileage}
              className="select__form__box"
            >
              <MenuItem value=''>Select mileage</MenuItem>
              {
                db.mileage.map((mileage, index) => (
                  <MenuItem key={index} value={`${mileage}`}>{mileage}</MenuItem>
                ))
              }
            </Select>
          </FormControl> */}
          <FormHeroSelect db={db} selectFunction={selectFuncs} />
        </Grid>
        <Grid item className="hero__tab-panel__form--slider">
          <Box>
            <Box
              component={'p'}
              textTransform={'capitalize'}
              color={'#323232'}
              marginBottom={'12px'}
            >
              price range:&nbsp;
              <Box
                component={'span'}
                fontSize={'15px'}
                color={'#323232'}
                fontWeight={700}
                border={'none'}
                width={'180px'}
              >
                {`$${sliderValue[0]}-$${sliderValue[1]}`}
              </Box>
            </Box>
            <Slider
              value={sliderValue}
              onChange={handleSlider}
              min={1}
              max={4000}
              className="range"
            />
          </Box>
        </Grid>
        <Button type="submit" sx={{
          textTransform: 'capitalize',
          backgroundColor: '#db2d2e',
          borderRadius: '2px',
          padding: '15px 35px 12px 38px',
          fontSize: '15px',
          fontWeight: 700,
          color: '#fff',
          '&:hover': {
            backgroundColor: '#db2d2e',
          }
        }}>searching</Button>
      </Grid>
    </FormGroup>
  )
}
