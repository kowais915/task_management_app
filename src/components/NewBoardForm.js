import {useState } from 'react';

// importing styles
import '../styles/Modal.css';


const NewBoardForm = () => {
    return ( 
        <form className="boardForm">
            
            <label>
                <span className='name'>Name</span>
                <input type="text" />

                
            </label>

            <label>
                <span className='columns'>Columns</span>
                <input type="text" />
            </label>

        </form>
     );
}
 
export default NewBoardForm;