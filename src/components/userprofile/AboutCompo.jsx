import React from 'react'

import styled from 'styled-components'

function AboutCompo() {
    return (
        <AboutCompoStlyled>
            <div className="sideBar">
                <div>About</div>
                <div>Overview</div>
                <div>Work and Education</div>
                <div>Places lived</div>
                <div>Contact Basic Info</div>
                <div>Family and Relationships</div>
                <div>Details About You</div>
                <div>Life Events</div>
            </div>
            <div className="infosection">

            </div>

        </AboutCompoStlyled>
    )
}

const AboutCompoStlyled = styled.div`
width: 55rem;





`
export default AboutCompo
