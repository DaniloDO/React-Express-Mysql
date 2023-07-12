import React from "react";
import { sidebarData } from "./SidebarData";

export default function Sidebar(){

    return (
        <div className="Sidebar">
            <ul className="ul-sidebar">
                {sidebarData.map((value, key) => {
                    return (
                        <div>
                            <li 
                                className="li-sidebar" 
                                key={key}
                                onClick={() => {window.location.pathname = value.link}}
                            >
                                <div className="icon">{value.icon}</div>
                                <div className="title">{value.title}</div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}