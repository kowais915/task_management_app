import '../styles/Modal.css';


const Modal = ({modalHandler}) => {

    return ( 
        <div className="backdrop">
            <div className="modal">
                <form>
                    <h1>This is the modal</h1>
                    <button onClick={modalHandler}>Close</button>
                </form>
            </div>
        </div>
     );
}
 
export default Modal;