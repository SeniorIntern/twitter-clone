import React from "react";
import "../Assets/Styles/SidebarOption.css";

export default function SidebarOption({ active, text, Icon }) {
    return (
        // string interpolation
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}
