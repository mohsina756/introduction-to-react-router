import { Link, NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <div>
            {/* <h2>Navbar</h2> */}
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/users">Users</Link> */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;