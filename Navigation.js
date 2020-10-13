import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="leftSideNav">
                <div className="leftNavBox logo"><img src="https://www.flaticon.com/svg/static/icons/svg/2830/2830102.svg" alt="Logo" /></div>
                <div className="leftNavBox dashboard"><img src="https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg" alt="dashboard" /></div>
                <div className="leftNavBox addNewRound"><img src="https://www.flaticon.com/svg/static/icons/svg/570/570216.svg" alt="Add New Round" /></div>
                <div className="leftNavBox previousRounds"><img src="https://www.flaticon.com/svg/static/icons/svg/2151/2151118.svg" alt="Previous Rounds" /></div>
                <div className="leftNavBox golferData"><img src="https://www.flaticon.com/svg/static/icons/svg/3176/3176251.svg" alt="Your Golfing Data" /></div>
                <div className="leftNavBox handicapImprover"><img src="https://www.flaticon.com/svg/static/icons/svg/1389/1389079.svg" alt="HandicapImprover" /></div>
                <div className="freeSpace"></div>
            </div>
            <div className="topNav">
                <div className="freeSpace"></div>
                <div className="topLogo">GOLF SIDEKICK</div>
                <div className="user">
                <h4>Kendall Hunt</h4>
                <img src="https://www.flaticon.com/svg/static/icons/svg/860/860784.svg" alt="User Portal" />
                    {/* <button className="signUp">Sign Up</button>
                    <button className="login">Login</button> */}
                </div>
            </div>
        </div>
    )
}

export default Navigation;