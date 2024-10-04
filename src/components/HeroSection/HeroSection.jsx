import './HeroSection.css';
import Nehal from '../../assets/Nehal.png';
export default function HeroSection(){
    return (
        <div className="herosection">
            <div className="left">
                <div className="para">
                    <p>Web Developer,</p>
                </div>
                <div className="herosectionh1">
                    <h1>I'm <span>Nehal Jain</span></h1>
                </div>
                <div className="stack">
                    <h1>Front-end Developer</h1>
                </div>
                <div className="para2">
                    <p>I help people to build their business by creating amazing websites which will boost sales, Highly professional in web designing and development.</p>
                </div>
            </div>
            <div className="right">
                <img src={Nehal} alt="" className='myimage'/>
            </div>
        </div>
    )
}