import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import ContactBar from './ContactBar';
import { Button, Container, Dialog, FormGroup, Grid, Paper, TextField, styled } from '@mui/material';
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
    padding: '0',
    marginRight: '60px',
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
        <Grid container justifyContent={'space-between'} alignItems={'center'} paddingY={4.375}>
          <Grid item md={2}>
            <Item>
              <Link to={'/'}>
                <img src='https://preview.colorlib.com/theme/hvac/img/logo.png' alt="Logo" />
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
                <NavLink to={'/contact'}>contact</NavLink>
              </Item>
            </Grid>
            <Grid container item md={3} >
              <Item>
                <Link to={'/cart'}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </Item>
              <Item>
                <Button onClick={handleOpen} sx={{'&:hover': {backgroundColor: 'initial'}, color: '#353535', minWidth: 0, padding: 0}} >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <Dialog
                  fullScreen
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '50px',
                  }}}
                >
                  <Button onClick={handleClose} sx={{
                    transform: 'rotate(45deg)',
                    fontSize: '28px',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '50%',
                    padding: '0',
                    minWidth: '0',
                    ":hover": {
                      backgroundColor: '#333',
                    },
                  }}>+</Button>
                  <FormGroup onSubmit={handleSubmit}>
                    <TextField label='Search' variant="standard" placeholder='Search here...' inputProps={{style: {width: '470px', fontSize: '40px', color: '#999'}}}></TextField>
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
