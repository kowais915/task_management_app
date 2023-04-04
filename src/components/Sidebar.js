import {useState, useEffect } from 'react';


// importing styles
import '../styles/Sidebar.css'

const Sidebar = () => {
    const [tabs, setTabs ] = useState([
        {title: "Platform Launch", id: 1},
        {title: "Product Launch", id: 2},
        {title: "Marketing", id: 3},
        {title: "Sales", id: 4},
    ]);

    return ( 
        <div className="sidebar">
            <h4>ALL   BOARDS</h4>

            {tabs.map((tab) => {
                return (
                    <div className="tab" key={tab.id}>
                        {tab.title}
                    </div>
                )
            })}
        </div>
     );
}
 
export default Sidebar;