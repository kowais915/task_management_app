import '../styles/Modal.css';

// importing components
import NewBoardForm from './NewBoardForm';


const Modal = ({modalHandler}) => {

    return ( 
        <div className="backdrop">
            <div className="modal">
                <form>
                    <h1>Add New Board</h1>
                    
                    <NewBoardForm />
                    <button onClick={modalHandler}>Close</button>
                </form>
            </div>
        </div>
     );
}
 
export default Modal;