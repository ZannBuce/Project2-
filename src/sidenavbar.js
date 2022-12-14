import React from "react" 
import "./App.css"

import {SidebarData} from './Sidebardata'

function Sidebar() {

    return (

        <div className="Sidebar">
    <ul className="SidebarList">
        {SidebarData.map((val, key)=> {
        return  (
            <li key={key} onClick={() => {window.location.pathname = val.link}}>
                {" "}
            <div>{val.icon}</div>{" "}
            <div>
                {val.title}
            </div>
            </li>
        );
    })}
    </ul>
    </div>
    )
    
}

export default Sidebar;