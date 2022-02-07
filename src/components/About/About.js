import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import './about.css'

// Timothy Do, about page. 
export default function About() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <div>
            {
                matches &&
                <Grid
                    container
                    spacing={1}
                    className='main_body'
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
                            <p>Team Worker, Good Listener, Learner, Not a jerk</p>
                        <Typography variant="h4">
                            Relative Education
                        </Typography>
                            <p>Code Immersive, Web Development Immersive, 2020 - 2021</p>
                            <p>Queens College, Computer Science, 2018 - 2020</p>
                            <p>LaGuardia Community College, Web Programming, 2017 - 2018</p>
                    </Grid>
                </Grid>
            }
            {
                !matches &&
                <Grid
                    container
                    className='main_body'
                >
                    <Grid item xs={12} className='tech'>
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
                        <Typography variant="h4">
                            Interpersonal Skills
                        </Typography>
                            <p>Team Worker, Good Listener, Learner, Not a jerk</p>
                        <Typography variant="h4">
                            Relative Education
                        </Typography>
                            <p>Code Immersive, Web Development Immersive, 2020 - 2021</p>
                            <p>Queens College, Computer Science, 2018 - 2020</p>
                            <p>LaGuardia Community College, Web Programming, 2017 - 2018</p>
                    </Grid>
                </Grid>
            }
        </div>
    );
}

