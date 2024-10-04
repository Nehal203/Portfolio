import { useState } from 'react';
import './Navbar.css'
import {Link} from "react-scroll";
export default function Navbar(){
    let [isNav, setIsNav]=useState(false);

    function toggle(){
        setIsNav(!isNav);
    }
    return(
        <div className="nav">
        <div className="navbar">
            <div className="logo">
                <h1 className="logoh1">N<span>ehal</span></h1>
            </div>
            <div className="listItems">
                <Link activeClass='active' to='herosection' spy={true} smooth={true} offset={-100} duration={500} className='list'>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='list'>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='list'>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='list'>Projects</Link>
            </div>
            <div className="btnNav">
                <button className='btn' onClick={()=>{
                    const contactSection=document.getElementsByClassName("contact")[0];
                    if(contactSection){
                        contactSection.scrollIntoView({behavior:"smooth"})
                    }
                }}>Contact Me</button>
            </div>
            <h1 onClick={toggle}>{!isNav ? (<i class="fa-solid fa-bars"></i>):(<i class="fa-solid fa-circle-xmark"></i>)}</h1>
        </div>
        {isNav &&

        <div className="navbar2">
            <div className="listItems2">
                <Link activeClass='active' to='herosection' spy={true} smooth={true} offset={-100} duration={500} className='list2'>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='list2'>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='list2'>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='list2'>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='list2'>Contact</Link>

            </div>
        </div>
}
        </div>
    )
}