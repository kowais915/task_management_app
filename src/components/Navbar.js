import { Link } from 'react-router-dom';


// import styles
import '../styles/Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
           <div className="brand">
                <h1>Task Management</h1>
           </div>
            <div className="links">
                <Link to="/">
                    <button>+ Add New Task</button>
                </Link>
                
            </div>

        </nav>
     );
}
 
export default Navbar;