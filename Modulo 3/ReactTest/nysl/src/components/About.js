import React from 'react'
import '../styles/About.css'

class About extends React.Component{
    render(){
        return(
            <div>
                <section className="aboutUs">
                    <h2>About Us</h2>
                    <div>
                        <p>The Northside Youth Soccer League was established in 1996 to provide the athletes residing in chicago´s nothside neighborhoods an enviroment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neigborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</p>
                    </div>
                    <div class="aboutmisvis">   
                        <div class="misvis">
                            <h2 className="textos">Mission</h2>
                            <p>To support young athletes living in Chicago´s nothside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.</p>
                        </div>
                        <div class="misvis">
                            <h2 className="textos">Vision</h2>
                            <p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</p>
                        </div>
                    </div>
                </section>
                <section id="contactSection">
                    <h4>
                        Please email us at 
                        <a href="mailto:nysl@chisoccer.org">	nysl@chisoccer.org.</a>
                    </h4>
                <h4 className="a">
                    We will reply to your email as soon as we can.
                </h4>
                </section>
            </div>
        )
    }
}

export default About