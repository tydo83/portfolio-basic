import React from 'react';
import './contact.css'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box';

import NewYork from '../../assets/NewYork-pixel.png'


const Contact = () => {
  return (
    <div className='main_body contact'>
      <div className='contact_image'>
        <img className='contact_image_size' src={NewYork} alt="New York Pixel Art" />
      </div>
      <div className='contact_section'>
        <h2>Contact</h2>
        <h5>If you have any questions about me or are looking for a freelancer, click the button below.</h5>
        <Box textAlign='center'>
          <Button className="button" variant="outlined" endIcon={<SendIcon />} onClick={() => window.location = 'mailto:tydo83@gmail.com'}>ContactMe</Button>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
