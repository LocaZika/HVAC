import './ContactBar.scss';
import { Container, Grid, Paper, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: 'none',
    boxShadow: 'none',
    lineHeight: '0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
}));
export default function ContactBar() {
  return (
    <div className='header__top'>
      <Container maxWidth={'lg'}>
        <Grid columnSpacing={3} container sx={{justifyContent: 'space-between'}}>
          <Grid container md={6} paddingY={0} sx={{alignItems: 'center'}}>
            <Grid item md={6}>
              <Item>
                <FontAwesomeIcon icon={faClock} className='contact-icon' />
                <span> Week day: 08:00 am to 18:00 pm</span>
              </Item>
            </Grid>
            <Grid item md={6}>
              <Item>
                <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                <span> locazika@gmail.com</span>
              </Item>
            </Grid>
          </Grid>
          <Grid container md={4} sx={{alignItems: 'center'}}>
            <Grid item md={6}>
              <Item>
                <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                <span> (+84) 123456789</span>
              </Item>
            </Grid>
            <Grid item md={6}>
              <Item>
                <Grid container>
                  <Item className='social-icon'>
                    <a href="https://facebook.com/locazika">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </Item>
                  <Item className='social-icon'>
                    <a href="https://twitrer.com">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Item>
                  <Item className='social-icon'>
                    <a href="https://google.com">
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                  </Item>
                  <Item className='social-icon'>
                    <a href="https://instagram.com">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Item>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
