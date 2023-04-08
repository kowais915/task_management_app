import {useState } from 'react';

// importing styles
import '../styles/Modal.css';


const NewBoardForm = ({setTabs, modalHandler, tabs, handleTabs }) => {

    const [allColumns, setAllColumns] = useState([]);
    const [name, setName ] = useState('');
    const [board, setBoard] = useState('');



    
    

    // the function that adds column inside the sidebar form
    const addColumn = () => {
        setAllColumns([...allColumns, <input className='columnsInput' onChange={(e)=>setName(e.target.value)} type="text"  />])
        console.log(name)
    }   


    // get the data from the form

    const getData = (event )=>{
        event.preventDefault();
        
        const tabsInput={
            title: board,
            id: Math.floor(Math.random() * 1000) + 1
        }



        console.log(board)


        handleTabs(tabsInput);

        
       

        modalHandler();
    }

   


    return ( 
    // form starts from here
        <>
        <form className="boardForm" >
            
            <label>
                
                <span className='name'> Board Name</span>
                <input className='nameInput' type="text" onChange={e=>setBoard(e.target.value)}/>

                
            </label>

            {/* new section for columns */}

           

                    
                        <span className='columns'>Columns</span>
                        {allColumns.map((column) => {
                            return (
                                
                                <label className='addNewColumn' >
                                    {column}
                                </label>
                                
                                
                            )
                        })}
                   


                    <button onClick={e=>{
                        e.preventDefault();
                        addColumn();
                    }} className='addColumnBtn' type="button">+ Add Column</button>


           

            {/* section for columns ends here */}

            <button className='close-btn' onClick={getData}  type="submit">Create New Board</button>

        </form>
        
        {/* form ends here */}

    
        </>
     );
}
 
export default NewBoardForm;