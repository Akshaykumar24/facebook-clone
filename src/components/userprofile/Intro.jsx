import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WifiIcon from '@mui/icons-material/Wifi';
import SchoolIcon from '@mui/icons-material/School';
function Intro() {
    const dummyEducationData = ["Dr. Babasaheb ambedkar technological university", "Vivekanand College ,Kolhapur", "Halkarni Highschool,Halkarni"]
    return (
        <IntroStyles>
            <div>
                <span>Intro</span>
            </div>
            {dummyEducationData.map((el) => {
                return <div key={uuidv4()}><SchoolIcon /><span>studied at{el}</span></div>
            })}
            <div><HomeIcon /><span>Lives in chandgad</span></div>
            <div><LocationOnIcon /><span>From kolhapur</span></div>
            <div><FavoriteIcon /><span>Single</span></div>
            <div><AccessTimeFilledIcon /><span>Joined march 2015</span></div>
            <div><WifiIcon /><span>Followed by 62 people</span></div>
            <div className="editDetailsBtn">Edit Details</div>
            <div className="editDetailsBtn">Add Hobbies</div>
        </IntroStyles>
    )
}


const IntroStyles = styled.div`
width: 23rem;
margin: auto;
display: grid;
grid-template-columns:1fr;
grid-gap: 1rem;
height: auto;
padding: 15px;
box-shadow: 1px 1px 13px var( --box-shadow-color);
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
    color: var(--font-dark-color);
    font-weight: 600;
    :hover {
        cursor:pointer;
        background-color:var(--hover-effect);
    }
}
`
export default Intro
