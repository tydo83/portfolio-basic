import React, { Component } from 'react';
import './about.css'

// Timothy Do, about page. 
export default class About extends Component {
    render() {
        return (
            <div className='main_body'>
                
                    <div className='tech_skills'>
                        <h3>Tools & Technologies</h3>
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
                                </ul>
                    </div>
                    <div className='inter_skills'>
                        <h3>Interpersonal Skills</h3>
                        <p>Good Listener, Learner, Not a jerk</p>
                    </div>
                    <div className='education'>
                    <h3>Relative Education</h3>
                    <p>Code Immersive, Web Development Immersive, 2020 - 2021</p>
                    <p>Queens College, Computer Science, 2018 - 2020</p>
                    <p>LaGuardia Community College, WEB PROGRAMMING, 2017 - 2018</p>
                </div>
                

                </div>
        );
    }
}
