import {useState } from 'react';

// importing styles
import '../styles/Modal.css';


const NewBoardForm = () => {

    const [allColumns, setAllColumns] = useState([
        <input className='columnsInput' type="text" />,
        <input className='columnsInput' type="text" />
        
    ]);

    const addColumn = () => {
        setAllColumns([...allColumns, <input className='columnsInput' type="text" />])
    }
    return ( 
        <form className="boardForm" onSubmit={e=>{
            e.preventDefault();
        }}>
            
            <label>
                <span className='name'>Name</span>
                <input className='nameInput' type="text" />

                
            </label>

            <label  className='addNewColumn'>
                <span className='columns'>Columns</span>
                {allColumns.map((column) => {
                    return (
                        
                        <label>
                             {column}
                        </label>
                        
                        
                    )
                })}
            </label>
            <button onClick={e=>{
                e.preventDefault();
                addColumn();
            }} className='addColumnBtn'>+ Add Column</button>
        </form>
     );
}
 
export default NewBoardForm;