import '../styles/BoardsArea.css'
import ColumnModal from './ColumnModal';

import { useState } from 'react';



// importing components
import Card from './Card';

const BoardsArea = ({columns, columnsHandler, boardColumns}) => {
const [cards, setCards ] = useState([
    {id: 1, title: 'card 1', description: 'This is the card description', columnId: 1},
    {id: 2, title: 'card 2', description: 'This is the card description', columnId: 1},
    {id: 3, title: 'card 3', description: 'This is the card description', columnId: 2},
    {id: 4, title: 'card 4', description: 'This is the card description', columnId: 2},
]);

    return ( 
        <div className="boards_area">
            <h1>This is the boards area</h1>
            
            <button onClick={columnsHandler}>Add new column</button>
            {columns && <ColumnModal columnsHandler = {columnsHandler}/>}

            {/* <div className="board_columns">
                {boardColumns.map((column) => {
                    return (
                        <div className="columns" key={column.id}>
                            <div>{column.title}</div>
                            
                        </div>
                    )
                })}

            </div> */}


            {/* rendering cards */}
            {cards.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}


        </div>
     );
}
 
export default BoardsArea;