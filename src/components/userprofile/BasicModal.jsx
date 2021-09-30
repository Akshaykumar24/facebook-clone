import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { styled as styled1 } from '@mui/material/styles';
import styled from 'styled-components'
import { useState } from "react"

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
    minHeight: "20rem",
    height: "auto",
    bgcolor: 'background.paper',
    borderRadius: " 0.9rem",
    boxShadow: `0px 0px 10px var(--font-light-color)`,

    p: 2,
};

export default function BasicModal({ title, btnText, handleClose, open }) {
    const [image, setImage] = useState({
        profileImg: ''
    })
    const [coverImage, setCoverImage] = useState({
        coverImg: ""
    })

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    const coverImageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setCoverImage({ coverImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const { profileImg } = image;
    const { coverImg } = coverImage;
    const handleImageClose = () => {
        setImage({ profileImg: "" })
        setCoverImage({ coverImg: "" })
    }
    console.log(profileImg)
    console.log(coverImg)
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditProfilePicTextStyled>
                        <div>{title}</div>
                        <div>
                            <span onClick={handleClose}>
                                <CloseIcon />
                            </span>

                        </div>
                    </EditProfilePicTextStyled>
                    <UploadProfPicStyled>
                        {
                            profileImg.length > 1 || coverImg.length > 1 ? <div> <img className="previewImage" src={title === "Edit Cover Photo" ? coverImg : profileImg} alt="" /> <span className="imageCloseIcon" onClick={handleImageClose}><CloseIcon /></span></div> : <label htmlFor="contained-button-file">

                                <Input accept="image/*" id="contained-button-file" onChange={title === "Edit Cover Photo" ? coverImageHandler : imageHandler} multiple type="file" />
                                <Button variant="contained" component="span">
                                    {btnText}
                                </Button>
                            </label>
                        }

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
min-height:12rem;
height: auto;
.profilePicBtn{
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--primary-color);
    color: var(  --primary-background-color);
}
.previewImage{
    width: 24rem;
    height: 20rem;
}
.imageCloseIcon{
        position: absolute;
  right:2rem;
  cursor: pointer;

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
        cursor: pointer;
}

`
export const EditProfilePicTextStyled = styled.div`
display: flex;
&>div:nth-child(1){
       width: 70%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
    font-weight: bold;
}

&>div:nth-child(2){
padding-left: 6rem;

span{
    width:5rem ;
    height:5rem;
    border-radius: 50%;
    background-color:var(--primary-background-color);
    border: 1px solid var(--background-gray-color);
    cursor: pointer;
    
    :hover{
        background-color: var(--background-gray-color)
    }
}
}


`