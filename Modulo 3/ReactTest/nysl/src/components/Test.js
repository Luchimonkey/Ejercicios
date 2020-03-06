import React from 'react';
import indexImg from '../images/icons/newspaper.png';
import aboutImg from '../images/icons/question_gray.png';
import infoImg from '../images/icons/football_gray.png';
import rulesImg from '../images/icons/championship_gray.png';
import registrationImg from '../images/icons/user_gray.png';
import '../styles/Test.css'

class Test extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <div id="index"><img src={indexImg} alt="news" /></div>
                    <div id="about"><img src={aboutImg} alt="about" /></div>
                    <div id="info"><img src={infoImg} alt="gameinfo" /></div>
                    <div id="rules"><img src={rulesImg} alt="rules" /></div> 
                    <div id="registration"><img src={registrationImg} alt="user" /></div>
                </nav>
            </div>
        )
    }
}

export default Test