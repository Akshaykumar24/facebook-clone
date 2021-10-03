import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WifiIcon from '@mui/icons-material/Wifi';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
function Intro({ work1, work2, education1, education2, livesIn, from, joined, followedBy, handleEditProfileOpen }) {
    let month = {
        "Jan": 1,
        "Feb": 2,
        "Mar": 3,
        "Apr": 4,
        "May": 5,
        "Jun": 6,
        "Jul": 7,
        "Aug": 8,
        "Sep": 9,
        "Oct": 10,
        "Nov": 11,
        "Dec": 12,
    }
    const year = joined.toString().slice(0, 4) || "2021";
    const monthNum = joined.toString().slice(5, 7);
    let monthname = "Oct"
    for (let key in month) {
        if (month[key] === Number(monthNum)) {
            monthname = key

        }
    }
    return (
        <IntroStyles>
            <div>
                <span>Intro</span>
            </div>
            {work1 && work1.length > 0 ? <div key={uuidv4()}><BusinessIcon /><span>worked at {work1}</span></div> : ""}
            {work2 && work2.length > 0 ? <div key={uuidv4()}><BusinessIcon /><span>worked at {work2}</span></div> : ""}
            {education1 && education1.length > 0 ? <div key={uuidv4()}><SchoolIcon /><span>studied at {education1}</span></div> : ""}
            {education2 && education2.length > 0 ? <div key={uuidv4()}><SchoolIcon /><span>studied at {education2}</span></div> : ""}
            {/* {work.map((el) => {
                return <div key={uuidv4()}><BusinessIcon /><span>worked at{el}</span></div>
            })} */}

            {livesIn ? <div><HomeIcon /><span>Lives in {livesIn}</span></div> : ""}
            {from ? <div><LocationOnIcon /><span>From {from}</span></div> : ""}
            <div><FavoriteIcon /><span>Single</span></div>
            {joined ? <div><AccessTimeFilledIcon /><span>Joined {monthname + " " + year}</span></div> : ""}
            {followedBy ? <div><WifiIcon /><span>Followed by {followedBy} people</span></div> : ""}

            <div className="editDetailsBtn" onClick={handleEditProfileOpen}>Edit Details</div>

        </IntroStyles>
    )
}


const IntroStyles = styled.div`
width: 100%;
margin: auto;
display: grid;
grid-template-columns:1fr;
grid-gap: 1rem;
height: auto;
padding: 15px;
box-shadow: 0px 0px 4px var(--icons-gray-color);
  border-radius: 1rem;
    background-color: var(--border-color);
& > div:nth-child(1){
    span{
          font-size: 1.4rem;
    font-weight: bold;
    }
  
}

&>div{
    align-items: center;
    display: flex;
    column-gap: 10px;
  
    .css-i4bv87-MuiSvgIcon-root{
     color: var( --icons-gray-color);
    }
}

.editDetailsBtn{
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 2.18rem;
    background-color:var(--background-gray-color);
    color: var(--ofont-dark-color);
    font-weight: 600;
    :hover {
        cursor:pointer;
        background-color:var(--hover-effect);
    }
}
`
export default Intro
