import { Link } from 'react-router-dom';


// importing components
import TaskModal from './TaskModal';

// import styles
import '../styles/Navbar.css';

const Navbar = ({taskModal, taskModalHandler}) => {
    return ( 
        <nav className="navbar">
           <div className="brand">
                <h1>Task Management</h1>
           </div>
            <div className="links">
                <Link to="/">
                    {taskModal && <TaskModal taskModalHandler = {taskModalHandler}/> }
                    <button onClick={taskModalHandler} className='new-task-btn'>+ Add New Task</button>
                </Link>
                
            </div>

        </nav>
     );
}
 
export default Navbar;