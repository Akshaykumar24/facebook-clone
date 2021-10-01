import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { styled as styled1 } from '@mui/material/styles';
import styled from 'styled-components'
import { useState } from "react"
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from "react-redux";
// import { getUser } from "../../redux/auth/action";
// import { useHistory } from "react-router-dom";
import LoadingIo from '../LoadingIo/LoadingIo'

import { updateUser } from "../../redux/auth/action";
import ErrorModal from '../ErrorPopup/ErrorModal'

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

export default function BasicModal({ title, btnText, handleClose, open, userData, refreshPage }) {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("");
    const [coverImageUrl, setCoverImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const handleErrorModalOpen = () => setErrorModalOpen(true);
    const handleErrorModalClose = () => {
        setErrorModalOpen(false);
        if (!imageUrl === "" || !coverImageUrl === "") {
            refreshPage()
        }

    }
    const [message, setMessage] = useState("")
    // const handleChange = async (e) => {
    //     const files = e.target.files[0];
    //     const data = new FormData();
    //     data.append("file", files);
    //     data.append("upload_preset", "facebookimagedb");
    //     setLoading(true);
    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
    //         { method: "POST", body: data }
    //     );
    //     const file = await res.json();
    //     setImageUrl(file.secure_url);

    //     setLoading(false);
    // };
    const handleUpload = () => {

        if (title === "Edit Cover Photo") {
            if (coverImageUrl === "") {
                setMessage("Invalid Image,please upload valid image")
                return handleErrorModalOpen()
            }
            dispatch(updateUser({ cover: coverImageUrl }, userData._id))
        } else {
            if (imageUrl === "") {
                setMessage("Invalid Image,please upload valid image")
                return handleErrorModalOpen()
            }
            dispatch(updateUser({ profile: imageUrl }, userData._id))
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            handleErrorModalOpen()
            setMessage("Image is successfully uploaded")

        }, 2000)



    };


    // const [body_photo, setBody_photo] = useState("")
    // const [image, setImage] = useState({
    //     profileImg: ''
    // })
    // const [coverImage, setCoverImage] = useState({
    //     coverImg: ""
    // })

    const imageHandler = async (e) => {
        // const reader = new FileReader();
        // reader.onload = () => {
        //     if (reader.readyState === 2) {
        //         setImage({ profileImg: reader.result })
        //     }
        // }
        // reader.readAsDataURL(e.target.files[0])

        const files = e.target.files[0];
        const data = new FormData();
        data.append("file", files);
        data.append("upload_preset", "facebookimagedb");
        setImageLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
            { method: "POST", body: data }
        );

        const file = await res.json();
        setImageLoading(false)
        setImageUrl(file.secure_url);

    };
    const coverImageHandler = async (e) => {
        // const reader = new FileReader();
        // reader.onload = () => {
        //     if (reader.readyState === 2) {
        //         setCoverImage({ coverImg: reader.result })
        //     }
        // }
        // reader.readAsDataURL(e.target.files[0])
        const files = e.target.files[0];
        const data = new FormData();
        data.append("file", files);
        data.append("upload_preset", "facebookimagedb");
        setImageLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
            { method: "POST", body: data }
        );
        const file = await res.json();
        setImageLoading(false)
        setCoverImageUrl(file.secure_url);
        console.log(coverImageUrl, "jojo")
    }

    const handleImageClose = () => {
        setImageUrl("")
        setCoverImageUrl("")
    }
    // console.log(profileImg)
    // console.log(coverImg)
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

                            <CloseIcon onClick={handleClose} />


                        </div>
                    </EditProfilePicTextStyled>
                    <UploadProfPicStyled>
                        {
                            (!imageLoading && imageUrl.length > 1) || (!imageLoading && coverImageUrl.length > 1) ? <div> <img className="previewImage" src={title === "Edit Cover Photo" ? coverImageUrl : imageUrl} alt="" /> <span className="imageCloseIcon" onClick={handleImageClose}><CloseIcon /></span></div> : !imageLoading ? <label htmlFor="contained-button-file">

                                <Input accept="image/*" id="contained-button-file" onChange={title === "Edit Cover Photo" ? coverImageHandler : imageHandler} multiple type="file" />
                                <Button variant="contained" component="span">
                                    {btnText}
                                </Button>
                            </label> : <LoadingIo />
                        }


                    </UploadProfPicStyled>
                    {errorModalOpen ? <ErrorModal message={message} handleErrorModalClose={handleErrorModalClose} errorModalOpen={errorModalOpen} /> : ""}

                    < UpdateProfilePicStyled >

                        <LoadingButton
                            color="primary"
                            onClick={handleUpload}
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                        >
                            Upload
                        </LoadingButton>
                    </UpdateProfilePicStyled>
                </Box>
            </Modal>
        </div >
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

svg{
    cursor: pointer;
}
}


`