import React, { Component } from 'react';

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';


import './about.css'

// Timothy Do, about page. 
export default class About extends Component {
    render() {
        return (

            <Grid container
                spacing={1}
                className='main_body'
                justifyContent="center"
                direction="row"
                // alignItems="center"
            >
                <Grid item xs={6} className='tech'>
                    <Typography variant="h4">
                        Tools & Technologies
                    </Typography>
                    <h4>Frontend</h4>
                    <ul>
                        <li>JavaScript(ES7), HTML5, CSS</li>
                        <li>React</li>
                        <li>Material UI, Bootstrap</li>
                    </ul>
                    <h4>Backend</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                    </ul>
                    <h4>DevOps</h4>
                    <ul>
                        <li>AWS EC2, S3, Route53</li>
                    </ul>
                    <h4>Version Control System</h4>
                    <ul>
                        <li>Git, GitHub</li>
                    </ul>
                    <h5>ETC</h5>
                    <ul>
                        <li>Microsoft Office</li>
                        <li>Figma</li>
                    </ul>
                </Grid>

                <Grid item xs={6} className='tech'>
                    <Typography variant="h4">
                        Interpersonal Skills
                    </Typography>
                    <p>Good Listener, Learner, Not a jerk</p>

                    <Typography variant="h4">
                        Relative Education
                    </Typography>
                    <p>Code Immersive, Web Development Immersive, 2020 - 2021</p>
                    <p>Queens College, Computer Science, 2018 - 2020</p>
                    <p>LaGuardia Community College, WEB PROGRAMMING, 2017 - 2018</p>

                </Grid>



            </Grid>

        );
    }
}
