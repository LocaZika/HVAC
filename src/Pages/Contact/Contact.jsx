import React from 'react'
import { Breadcrumb } from '../../Components';
import { Container, Grid } from '@mui/material';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <div className='contact'>
      <Breadcrumb currentPath={'contact us'} />
      <Container>
        <Grid paddingY={12.5} borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}>
          <ContactForm />
        </Grid>
        <Grid>
          <ContactInfo />
        </Grid>
      </Container>
    </div>
  )
}