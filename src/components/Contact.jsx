import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAndroidAlt, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faLinkedin, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>My Status</h1>
                <p>I'm actively looking for freelance work.</p>
            </div>
            <div className="lower">
                <div className="contact-title2">
                    <h2>Contact me here</h2>
                </div>
                <div className="singleCol social-media-icons">
                    <a href="https://github.com/joshuakuizon2519">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-kuizon-027868244/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://stackoverflow.com/users/20862835/joshua-kuizon">
                        <FontAwesomeIcon icon={faStackOverflow}/>
                    </a>
                    <a href="https://www.facebook.com/joshua.r.kuizon">
                        <FontAwesomeIcon icon={faSquareFacebook}/>
                    </a>
                    <a href="https://www.instagram.com/joshua.kuizon">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>

                <div className="contact-email-number">
                    <div className="flex 1">
                        <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                        <p>kuizonjoshua7@gmail.com</p>
                    </div>
                    <div className=" flex 2">
                        <FontAwesomeIcon className="icon" icon={faMobileAndroidAlt}/>
                        <p>+639060858626</p>
                    </div>
                    <div className="flex 3">
                    <FontAwesomeIcon className="icon" icon={faLocationDot}/>
                    <p>Veloso Street, Sogod, Southern Leyte</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default Contact