import "./Skills.css"
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import tailwind from "../../assets/tailwind.png";
import Cplus from "../../assets/Cplus.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";
import dbms from "../../assets/dbms.png";
import operating from "../../assets/operating.png";
import dsa from "../../assets/dsa.png";


export default function Skills(){
    return(
        <div className="skills">
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                <div className="react">
                    <div className="reactimg">
                        <img src={react} alt="" className="reactimg2"/>
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={html} alt="" className="htmlimg1"/>
                    </div>
                </div>
                <div className="tailwind">
                    <div className="tailwindimg">
                        <img src={tailwind} alt="" className="tailwindimg1" />
                    </div>
                </div>
                <div className="Cplus">
                    <div className="Cplusimg">
                        <img src={Cplus} alt="" className="Cplusimg1" />
                    </div>
                </div>
                <div className="java">
                    <div className="javaimg">
                        <img src={java} alt="" className="javaimg1" />
                    </div>
                </div>
                <div className="sql">
                    <div className="sqlimg">
                        <img src={sql} alt="" className="sqlimg1" />
                    </div>
                </div>
                <div className="dbms">
                    <div className="dbmsimg">
                        <img src={dbms} alt="" className="dbmsimg1" />
                    </div>
                </div>
                <div className="operating">
                    <div className="operatingimg">
                        <img src={operating} alt="" className="operatingimg1" />
                    </div>
                </div>
                <div className="dsa">
                    <div className="dsaimg">
                        <img src={dsa} alt="" className="dsaimg1" />
                    </div>
                </div>
            </div>
        </div>
    )
}