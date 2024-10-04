import "./About.css"
import about from '../../assets/about.png'
export default function About(){
    return(
        <div className="about">
            <div className="img">
                <img src={about} alt="" className="aboutimg"/>
            </div>
            <div className="aboutsection">
                <div className="headingabout">
                    <h1>ABOUT</h1>
                </div>
                <div className="headingh3about">
                    <h3>Proffesional Web Designer & Developer Having % Years of Experience</h3>
                </div>
                <div className="paraabout">
                    <p>I'm Nehal jain, currently pursuing a B.Tech in Computer Science and Engineering from Parul Institute Of Engineering And Technology.</p>
                </div>
                <div className="para1about">
                    <p>I'm skilled in programming languages like C++, Java, Html, Css, Javascript, reflecting my passion for coding.</p>
                </div>
                <div className="btnabout">
                    <button className="btnabout1">Download CV</button>
                </div>
            </div>
        </div>
    )
}