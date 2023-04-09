import '../styles/BoardsArea.css'
import ColumnModal from './ColumnModal';

const BoardsArea = ({columns, columnsHandler, boardColumns}) => {


    return ( 
        <div className="boards_area">
            <h1>This is the boards area</h1>
            
            <button onClick={columnsHandler}>Add new column</button>
            {columns && <ColumnModal columnsHandler = {columnsHandler}/>}

            <div className="board_columns">
                {boardColumns.map((column) => {
                    return (
                        <div className="columns" key={column.id}>
                            <div>{column.title}</div>
                            
                        </div>
                    )
                })}

            </div>


        </div>
     );
}
 
export default BoardsArea;