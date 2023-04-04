import {useState, useEffect } from 'react';


// importing styles
import '../styles/Sidebar.css'
import Modal from './Modal';

const Sidebar = ({modalHandler, modal}) => {
    


    const [tabs, setTabs ] = useState([
        {title: "Platform Launch", id: 1},
        {title: "Product Launch", id: 2},
        {title: "Marketing", id: 3},
        {title: "Sales", id: 4},
    ]);

  


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

            {modal && <Modal modalHandler={modalHandler}/>}
            <button onClick={modalHandler} className='board-btn'>+ Create New Board</button>
        </div>
     );
}
 
export default Sidebar;