import './Header.scss';
import { Link } from 'react-router-dom';
import ContactBar from './ContactBar';
import { Container, Grid, Paper, styled } from '@mui/material';
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
    textAlign: 'center',
  }));
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <header>
      <ContactBar />
      <Container maxWidth='lg'>
        <Grid container justifyContent={'space-between'}>
          <Grid item md={2} lg={2}>
            <Item>
              <Link to={'/home'}>
                <img src={logo} alt="Logo" />
              </Link>
            </Item>
          </Grid>
          <Grid item md={10} lg={10}>
            <Grid container>
              <Item>
                <Link to={'/home'}>home</Link>
              </Item>
              <Item>
                <Link to={'/cars'}>cars</Link>
              </Item>
              <Item>
                <Link to={'/blog'}>blog</Link>
              </Item>
              <Item>
                <Link to={'/about'}>about</Link>
              </Item>
              <Item>
                <Link to={'/contac'}>contact</Link>
              </Item>
            </Grid>
            <Grid container>
              <Item>
                <Link to={'/cart'}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </Item>
              <Item>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
