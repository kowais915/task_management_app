import '../styles/Modal.css';


const TaskModal = ({taskModalHandler}) => {

    return ( 
        <div className="backdrop">
            <div className="modal">
                <form>
                    <h1>This is the task modal</h1>
                    <button onClick={taskModalHandler}>Close</button>
                </form>
            </div>
        </div>
     );
}
 
export default TaskModal;