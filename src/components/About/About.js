import React, { Component } from 'react';
import MyAvatar from '../../assets/MyAvatar.svg'
import './about.css'

// Timothy Do, about page. 
export default class About extends Component {
    render() {
        return <div className='portfolio_about'>
            <img src={MyAvatar} alt="myAvatar" className='portfolio_about_avatar' />
            <div className='portfolio_about_me'>
                <h1>Hi, I'm Timothy, 
                    <br />Front-end Web Developer living in NYC.</h1>
                <h4>
                    After I served in the Army as a nutritional care 
                    specialist, I have considered what I have to do next outside of the Army. Front-end development 
                    was my answer. I aced during my cohort and realized I love to make website from scratch.
                    I don't have much experience yet, but I'm always ready to learn and Google.  
                </h4>
            </div>
        </div>;
    }
}
