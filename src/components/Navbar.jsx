import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a class="active" href="#home">Joshua Kuizon</a></li>
                <li><a href="#news">About</a></li>
                <li><a href="#contact">Project</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
        </div>
        
    )
}

export default Navbar