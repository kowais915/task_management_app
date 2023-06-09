import '../styles/Modal.css';

// importing components
import NewBoardForm from './NewBoardForm';


const NewBoardModal = ({modalHandler, setTabs, handleTabs, handleBoardColumns}) => {

    return ( 
        <div className="backdrop">
            <div className="modal">
                <form>
                    <h1>Add New Board</h1>
                    
                    <NewBoardForm 
                    handleTabs = {handleTabs} 
                    setTabs={setTabs} 
                    modalHandler={modalHandler}
                    handleBoardColumns = {handleBoardColumns} 
                    />
                   
                </form>
            </div>
        </div>
     );
}
 
export default NewBoardModal;