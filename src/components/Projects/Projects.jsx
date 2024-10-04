import "./Projects.css"
import portfolio from "../../assets/portfolio.png";
import spotify from "../../assets/spotify.png";
import todo from "../../assets/todo.png";
import stopwatch from "../../assets/stopwatch.png";
import quiz from "../../assets/quiz.png";
import calculator from "../../assets/calculator.png";


export default function Projects(){
    return (
        <div className="projects">
             <div className="headingprojects">
                <h1>My Projects</h1>
                <div className="projects1">
                    <div className="box1">
                        <div className="headingportfolio">
                            <h4>Portfolio</h4>
                        </div>
                        <img src={portfolio} alt="" className="portfolioimg"/>
                    </div>
                    <div className="box1">
                        <div className="headingspotify">
                            <h4>Spotity clone</h4>
                        </div>
                        <img src={spotify} alt="" className="spotifyimg"/>
                    </div>
                    <div className="box1">
                        <div className="headingtodo">
                            <h4>Todo-List</h4>
                         </div>
                         <img src={todo} alt="" className="todoimg"/>
                    </div>
                    <div className="box1">
                        <div className="headingstopwatch">
                            <h4>Stop-Watch</h4>
                         </div>
                         <img src={stopwatch} alt="" className="stopwatchimg"/>
                    </div>
                    <div className="box1">
                        <div className="headingquiz">
                            <h4>Quiz</h4>
                         </div>
                         <img src={quiz} alt="" className="quizimg"/>
                    </div>
                    <div className="box1">
                        <div className="headingcalculator">
                            <h4>calculator</h4>
                         </div>
                         <img src={calculator} alt="" className="calculatorimg"/>
                    </div>
                </div>
             </div>
        </div>
    )
}