import "./Projects.css";
import chatapp from "../../src/img/chatapp-pic.jpg";
import calculator from "../../src/img/calculator-pic.jpg";
import vendoor from "../../src/img/vendoor-pic.jpeg";
import bookit from "../../src/img/bookit-recep.png";

const Projects = () => {
    return (
        <div className="projects">
            <div className="prj-title">
                <h1>
                    Projects
                </h1>
            </div>
            <div className="prj-desc">
                <p>These are currently the projects that I have made
                    since my freshman year in Computer Science.
                </p>
            </div>
            <div className="prj-flex">
                <div className="flex">
                <div className="prj-pic-web"><img src={bookit} alt="pic"></img></div>
                    <div className="description">
                            <h2>BookIt</h2><br/>
                            <p>A hotel booking system using PHP and mySql.
                               Our first project with my friends.</p> </div>
                </div>
                <div className="flex">
                    <div className="prj-pic2"><img src={vendoor} alt="pic"></img></div>
                    <div className="description">
                            <h2>Vendoor App</h2><br/>
                            <p>It is an unfinished e-commerce app specifically for live selling and auctioning.
                               </p> </div>
                </div>
                <div className="flex">
                    <div className="prj-pic"><img src={calculator} alt="pic"></img></div>
                    <div className="description"> 
                            <h2>Calculator</h2><br/>
                            <p>A simple calculator made with C# and Xamarin Forms.</p></div>
                </div>
                <div className="flex">
                    <div className="prj-pic"><img src={chatapp} alt="pic"></img></div>
                    <div className="description">
                            <h2>ChatApp</h2><br/>
                            <p>ChatApp is a pairwise project for a major we had.
                                 We used C# and Xamarin Forms.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects