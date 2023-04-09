import '../styles/Column.css'
import { useState } from 'react';


// importing components
import Card from './Card';

const Column = () => {
    const [cards, setCards ] = useState([
        {id: 1, title: 'card 1', description: 'This is the card description', columnId: 1},
        {id: 2, title: 'card 2', description: 'This is the card description', columnId: 1},
        {id: 3, title: 'card 3', description: 'This is the card description', columnId: 2},
        {id: 4, title: 'card 4', description: 'This is the card description', columnId: 2},
    ]);
    


    return ( 
        <div className="column">
            <h4>This is the column</h4>

            {/* rendering cards */}
            {cards.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}

        </div>
     );
}
 
export default Column;