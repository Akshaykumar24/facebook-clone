import React from 'react';
import SideBarContent from "./SideBarContent";
import { Link } from "react-router-dom";
import "../../styles/SideBar/SideBar.css";

function SideBar() {
    return (
        <div className="sideBarContainer">
            <div className="sideBarLinksContainer">
                <Link className="flexBox sideBarContentLink">
                    <SideBarContent src={'https://lh3.googleusercontent.com/a-/AOh14GhRn5Z0k4yIPKiZRdd8cTmkzDbqswy-A1yJjMTMBw=s576-p-rw-no'} label="Vaibhav" />
                </Link>
                <Link className="flexBox sideBarContentLink" to="/friends/new">
                    <SideBarContent src={'/Images/friends_icon.png'} label="Friends" />
                </Link>
                <Link className="flexBox sideBarContentLink" to="/">
                    <SideBarContent src={'/Images/market_place_icon.png'} label="Marketplace" />
                </Link>
                <Link className="flexBox sideBarContentLink" to="/messenger/new">
                    <SideBarContent src={'/Images/messenger_icon.png'} label="Messenger" />
                </Link>
                <Link className="flexBox sideBarContentLink" to="/">
                    <SideBarContent src={'/Images/memories_icon.png'} label="Memories" />
                </Link>
                <Link className="flexBox sideBarContentLink" to="/videos">
                    <SideBarContent src={'/Images/watch_icon.png'} label="Watch" />
                </Link>
                <Link className="flexBox sideBarContentLink" to="/favorites">
                    <SideBarContent src={'/Images/favorites_icon.png'} label="Favorites" />
                </Link>
            </div>
        </div>
    )
}

export default SideBar
