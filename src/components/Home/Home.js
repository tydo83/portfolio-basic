import React, { Component } from 'react';
import MyAvatar from '../../assets/MyAvatar.svg'
import './home.css'

// Timothy Do, home page. 
export default class Home extends Component {
    render() {
        return (
        <div className='portfolio_home'>
            <div className='portfolio_home_avatar'>
                <img src={MyAvatar} alt="myAvatar"/>
            </div>
            <div className='portfolio_home_about_me'>
                <h1>Hi, I'm Timothy,<br />Front-end Web Developer living in NYC.</h1>
                <h4>
                    After I served in the Army as a nutritional care 
                    specialist, I have considered what I have to do next outside of the Army. Front-end development 
                    was my answer. I aced the class during my cohort and realized I love to make websites from scratch.
                    I don't have much experience yet, but I'm always ready to learn and Google.  
                </h4>
            </div>
        </div>
        );
    }
}
