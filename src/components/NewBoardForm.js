import {useState } from 'react';

// importing styles
import '../styles/Modal.css';


const NewBoardForm = ({setTabs, modalHandler, tabs}) => {

    const [allColumns, setAllColumns] = useState([]);
    const [name, setName ] = useState('');

    
    

    const addColumn = () => {
        setAllColumns([...allColumns, <input className='columnsInput' type="text"  />])
    }


    // get the data from the form

    const getData = (event )=>{
        event.preventDefault();
        const name = event.target.name.value;

        console.log(name)

        // const columns = event.target.columns.value;

        setTabs((prevTabs) => {
            return [...prevTabs, {title: name, id: Math.random() * 1000}]
        })
    }




    return ( 
    // form starts from here
        <>
        <form className="boardForm" onSubmit={getData}>
            
            <label>
                <span className='name'> Board Name</span>
                <input className='nameInput' type="text" onChange={e=>setName(e.target.value)}/>

                
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

            <button className='close-btn'  type="submit">Create New Board</button>

        </form>
        
        {/* form ends here */}

    
        </>
     );
}
 
export default NewBoardForm;