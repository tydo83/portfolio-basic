import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import './contact.css'
import NewYork from '../../assets/NewYork-pixel.png'

const Contact = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <Grid
      container
      className='main_body'
    >
      {
        matches &&
          <Grid item xs={8} className='contact_image'>
            <img className='contact_image_size' src={NewYork} alt="New York Pixel Art" />
          </Grid>
      }
      {
        matches ? 
          <Grid item xs={4} className='contact_section'>
            <h2>Contact</h2>
            <h5 className='contact_section_des'>
              If you have any questions about me <br /> 
              or are looking for a freelancer, <br /> 
              click the button below.
            </h5>
            <Box>
              <Button className="button" variant="outlined" endIcon={<SendIcon />} onClick={() => window.location = 'mailto:tydo83@gmail.com'}>ContactMe</Button>
            </Box>
          </Grid>        
        : 
          <Grid item xs={12} className='contact_section'>
            <h2>Contact</h2>
              <h5 className='contact_section_des'>
                If you have any questions about me <br /> 
                or are looking for a freelancer, <br /> 
                click the button below.
              </h5>
            <Box>
              <Button className="button" variant="outlined" endIcon={<SendIcon />} onClick={() => window.location = 'mailto:tydo83@gmail.com'}>ContactMe</Button>
            </Box>
          </Grid>      
      }
  </Grid>
  )
};

export default Contact;
