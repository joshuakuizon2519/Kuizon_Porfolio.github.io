import "./About.css";
import pic from "../../src/img/aboutme_pic.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <h1>About Me</h1>
                <p>
                    My name is Joshua R. Kuizon, currently a 3rd year BS Computer Science student
                    at University of San Carlos. I love this program so much as it helps me in 
                    becoming a programmer and web developer. I have used a couple of languages such as C,
                    PHP, Java, Javascript and other languages I have used in college.
                </p>
                <p>
                    I am into Machine Learning, human-computer interactions and front-end development.
                    In my free time, I read books, play the piano and practice cooking. 

                    
                </p>
            </div>
            <div className="about-right">
                <img className = "abt-pic"src={pic} alt="pic"></img>
            </div>
            
        </div>
    )
}

export default About