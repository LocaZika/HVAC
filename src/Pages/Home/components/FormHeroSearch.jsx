import { Box, Button, FormControl, FormGroup, Grid, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { formHeroSlice, formHeroState } from './formHeroSlice';

const db = {
  years: [2020, 2019, 2018, 2017, 2016, 2015],
  brands: ['audi', 'lamborghini', 'bugatti', 'BWM'],
  models: ['q3', 'q4', 'aventador'],
  mileage: [27, 25, 15, 10],
}
export default function FormHeroSearch() {
  const {year, brand, model, mileage} = useSelector(formHeroState);
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
  
  return (
    <FormGroup>
      <Grid container className="hero__tab-panel__form">
        <Grid item className="hero__tab-panel__form--listitem">
          <FormControl className="select__form">
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
          </FormControl>
        </Grid>
        <Grid item >

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
