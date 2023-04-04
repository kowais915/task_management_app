import '../styles/BoardsArea.css'
import ColumnModal from './ColumnModal';

const BoardsArea = ({columns, columnsHandler}) => {
    return ( 
        <div className="boards_area">
            <h1>This is the boards area</h1>
            
            <button onClick={columnsHandler}>Add new column</button>
            {columns && <ColumnModal/>}


        </div>
     );
}
 
export default BoardsArea;