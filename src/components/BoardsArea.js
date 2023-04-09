import '../styles/BoardsArea.css'
import ColumnModal from './ColumnModal';

import { useState } from 'react';


// importing components
import Column from './Column';




const BoardsArea = ({columns, columnsHandler, boardColumns}) => {

const [areaColumns, setAreaColumns] = useState([
    {id: 1, title: 'Todo', boardId: 1},
    {id: 2, title: 'In Progress', boardId: 1},
    {id: 3, title: 'Done', boardId: 1}
])

    return ( 
        <div className="boards_area">
            
            
           

            {/* <div className="board_columns">
                {boardColumns.map((column) => {
                    return (
                        <div className="columns" key={column.id}>
                            <div>{column.title}</div>
                            
                        </div>
                    )
                })}

            </div> */}

            {/* rendering columns */}
            <div className="columnsArea">
                {areaColumns.map((column) => {
                    return (
                        <Column key={column.id} column={column}/>
                    )
                })}
            </div>


            {/* add column button */}
            <div className="colModal">
                <button onClick={columnsHandler}>Add new column</button>
                {columns && <ColumnModal columnsHandler = {columnsHandler}/>}
            </div>

        </div>
     );
}
 
export default BoardsArea;