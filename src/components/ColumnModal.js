// importing styles
import '../styles/ColumnModal.css';

const ColumnModal = ({columnsHandler}) => {
    return (  
        <div className="backdrop">
        <div className="modal">
            <form>
                <h1>Add new column modal</h1>
                <button onClick={columnsHandler}>Close</button>
            </form>
        </div>
    </div>
    );
}
 
export default ColumnModal;