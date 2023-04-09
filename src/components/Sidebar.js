import {useState, useEffect } from 'react';

// importing components
import BoardsArea from '../components/BoardsArea';


// importing styles
import '../styles/Sidebar.css'
import NewBoardModal from './NewBoardModal';

const Sidebar = ({modalHandler, modal, handleBoardColumns}) => {
    


    const [tabs, setTabs ] = useState([
        {title: "Platform Launch", id: 1}
    ]);


    const handleTabs = (event )=>{
        setTabs((prevTabs) => {
            return [...prevTabs, event]
        })
    }

  


    return ( 
        <div className="sidebar">
           
            

            <h5>ALL BOARDS ({tabs.length})</h5>

            {tabs.map((tab) => {
                return (
                    <div className="tab" key={tab.id}>
                        {tab.title}
                    </div>
                )
            })}

            {modal && <NewBoardModal
            
                handleTabs = {handleTabs} 
                modalHandler={modalHandler} 
                setTabs={setTabs} 
                tabs={tabs}
                handleBoardColumns = {handleBoardColumns}    
            />}
            <button onClick={modalHandler} className='board-btn'>+ Create New Board</button>
        </div>
     );
}
 
export default Sidebar;