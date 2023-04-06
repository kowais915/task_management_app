import '../styles/Modal.css';

// importing components
import NewBoardForm from './NewBoardForm';


const NewBoardModal = ({modalHandler, setTabs}) => {

    return ( 
        <div className="backdrop">
            <div className="modal">
                <form>
                    <h1>Add New Board</h1>
                    
                    <NewBoardForm setTabs={setTabs} modalHandler={modalHandler} />
                   
                </form>
            </div>
        </div>
     );
}
 
export default NewBoardModal;