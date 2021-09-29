import React from 'react';

function SideBarContent ({ src, label }) {

    return (
        <div className="sideBarContentContainer flexBox">
            <div className="sideBarContentUserImageBox">
                <img className="sideBarContentImage" src={src} alt={{label}}/>
            </div>
            <div className="sideBarContentLabel">{label}</div>
        </div>
    )
}

export default SideBarContent
