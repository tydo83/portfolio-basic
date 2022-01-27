import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, Link } from '@mui/material';
import './footer.css'

const Footer = () => {
  return <div className='portfolio_footer'>
    <div className='portfolio_footer_credit'>
      <p>© Timothy Do, Code Monkey in New York</p>
    </div>
    <div className='portfolio_footer_icons'>
      <Grid container direction="row">
        <Link href="https://www.linkedin.com/in/timothy-do-16235560/" target="_blank" >
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/tydo83" target="_blank" >
          <GitHubIcon />
        </Link>
      </Grid>
    </div>
  </div>;
};

export default Footer;
