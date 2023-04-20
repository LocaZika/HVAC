import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import ContactBar from './ContactBar';
import { Button, Container, Dialog, FormGroup, Grid, Paper, TextField, styled } from '@mui/material';
import logo from '../../../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: 'none',
    boxShadow: 'none',
    lineHeight: '0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '0 32px 0 0',
    textAlign: 'center',
  }));
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {};
  return (
    <header>
      <ContactBar />
      <Container maxWidth='lg'>
        <Grid container justifyContent={'space-between'} alignItems={'center'} p={4.375}>
          <Grid item md={2}>
            <Item>
              <Link to={'/'}>
                <img src={logo} alt="Logo" />
              </Link>
            </Item>
          </Grid>
          <Grid item container md={10} >
            <Grid container item md={9} justifyContent={'flex-end'} className='navbar' >
              <Item>
                <NavLink to={'/'} end >home</NavLink>
              </Item>
              <Item>
                <NavLink to={'/cars'}>cars</NavLink>
              </Item>
              <Item>
                <NavLink to={'/blog'}>blog</NavLink>
              </Item>
              <Item>
                <NavLink to={'/about'}>about</NavLink>
              </Item>
              <Item>
                <NavLink to={'/contac'}>contact</NavLink>
              </Item>
            </Grid>
            <Grid container item md={3} >
              <Item>
                <Link to={'/cart'}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </Item>
              <Item>
                <Button onClick={handleOpen} sx={{'&:hover': 'background-color: 0', color: '#353535', minWidth: 0}} >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <Dialog
                  fullScreen
                  open={open}
                  onClose={handleClose}
                >
                  <Button onClick={handleClose}>+</Button>
                  <FormGroup onSubmit={handleSubmit}>
                    <TextField label='Search' variant="standard" placeholder='Search here...'></TextField>
                  </FormGroup>
                </Dialog>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
