import React from 'react'
import Tooltip from '@mui/material/Tooltip';


function IconWrapper({children,title}) {
    return (
        <div >
            <Tooltip title={title}>
            {children}
            </Tooltip>
        </div>
    )
}

export default IconWrapper
