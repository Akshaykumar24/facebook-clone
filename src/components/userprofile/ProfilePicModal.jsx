import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { styled as styled1 } from '@mui/material/styles';
import styled from 'styled-components'

const Input = styled1('input')({
    display: 'none',
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    display: "grid",
    gridTemplateRows: " 1fr 3fr 1fr",
    alignItems: "center",
    height: "20rem",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditProfilePicTextStyled>
                        <div>Edit Profile Picture</div>
                        <div>
                            <CloseIcon />
                        </div>
                    </EditProfilePicTextStyled>
                    <UploadProfPicStyled>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                    </UploadProfPicStyled>
                    <UpdateProfilePicStyled>
                        <div className="updateBtn">Update</div>
                    </UpdateProfilePicStyled>
                </Box>
            </Modal>
        </div>
    );
}

const UploadProfPicStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid var(--font-light-color);
border-bottom: 1px solid var(--font-light-color);
height: 100%;
.profilePicBtn{
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--primary-color);
    color: var(  --primary-background-color);
}

`

const UpdateProfilePicStyled = styled.div`

display: flex;
justify-content:flex-end;
align-items: center;

.updateBtn{
  height: 2rem;
    width: 6rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--primary-color);
    color: var(  --primary-background-color);
}

`
const EditProfilePicTextStyled = styled.div`
display: flex;
&>div:nth-child(1){
    width: 65%;
    display: flex;
    justify-content: flex-end;
}

&>div:nth-child(2){
padding-left: 7rem
}


`