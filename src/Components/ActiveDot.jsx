import React from 'react'
import styled from 'styled-components'

const Dot = styled.div`
   border-radius: 50%;
  border: 4px solid rgb(49,162,76);
  position: absolute;
  font-weight: 500;
  right:278px;
  top:135px;
`

function ActiveDot() {
    return (
        <Dot></Dot>
    )
}

export default ActiveDot
