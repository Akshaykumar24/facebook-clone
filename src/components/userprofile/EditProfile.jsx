import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/auth/action";
import { useHistory } from "react-router-dom";

import { updateUser } from "../../redux/auth/action";
import ErrorModal from '../ErrorPopup/ErrorModal'
import ConfirmationPopup from '../ErrorPopup/ConfirmationPopup'
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
const style = {
    position: "absolute",
    top: '50% !important',
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    bgcolor: "background.paper",
    borderRadius: " 0.9rem",
    boxShadow: `0px 0px 10px var(--font-light-color)`,
    maxHeight: "35rem",
    overflowY: "scroll",
    display: "grid",
    gridGap: "1rem",
    p: 4,
};

export default function EditProfieModal({
    handleEditProfileClose,
    editProfileOpen,
    userData,
    refreshPage
}) {
    const dispatch = useDispatch();


    const initValues = {
        first_name: userData.first_name ? userData.first_name : "",
        last_name: userData.last_name ? userData.last_name : "",
        email: userData.email ? userData.email : "",
        password: "",

        dob: userData.dob ? userData.dob : "",
        gender: userData.gender ? userData.gender : "",

        bio: userData.bio ? userData.bio : "",
        education1: userData.education1 ? userData.education1 : "",
        education2: userData.education2 ? userData.education2 : "",
        city1: userData.city1 ? userData.city1 : "",
        city2: userData.city2 ? userData.city2 : "",
        country: userData.country ? userData.country : "",

        work1: userData.work1 ? userData.work1 : "",
        work2: userData.work2 ? userData.work2 : "",

        relationship: userData.relationship ? userData.relationship : "",
        mobile: userData.mobile ? userData.mobile : "",
    };

    let payload2 = initValues;
    const handleChange = (e) => {
        const { name, value } = e.target;
        payload2 = {
            ...payload2,
            [name]: value,
        };
    };


    useEffect(() => { }, [dispatch]);
    return (
        <EditProfieModalStyled>
            <Modal
                open={editProfileOpen}
                onClose={handleEditProfileClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditDetailsStyled>
                        <div>Edit Details</div>
                        <div>

                            <CloseIcon onClick={handleEditProfileClose} />

                        </div>
                    </EditDetailsStyled>
                    <div>
                        <TextField
                            key={uuidv4()}
                            fullWidth
                            type="text"
                            name="first_name"

                            defaultValue={userData.first_name}
                            label="First Name"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="text"

                            label="Last Name"
                            name="last_name"
                            variant="outlined"
                            defaultValue={userData.last_name}
                            key={uuidv4()}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="email"

                            label="Email"
                            name="email"
                            variant="outlined"
                            defaultValue={userData.email}
                            // value={email}
                            onChange={handleChange}
                            key={uuidv4()}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="password"

                            name="password"
                            onChange={handleChange}
                            label="Password"
                            defaultValue=""
                            variant="outlined"
                            key={uuidv4()}
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={handleChange}
                            defaultValue={userData.dob}
                            name="dob"
                            id="outlined-required"
                            type="date"
                            fullWidth
                            key={uuidv4()}
                        />
                    </div>
                    <div>
                        <FormControl key={uuidv4()} fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={userData.gender}
                                label="Gender"
                                name="gender"
                                onChange={handleChange}
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Bio"
                            multiline
                            rows={4}
                            name="bio"
                            defaultValue={userData.bio}
                            onChange={handleChange}
                            key={uuidv4()}
                        // value={bio}
                        />
                    </div>
                    <WorkTextStyled>
                        <span>Work</span>
                    </WorkTextStyled>
                    <WorkInputsStyled>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={userData.work1}

                                // value={work1}
                                label="Work-1"
                                variant="outlined"
                                name="work1"
                                onChange={handleChange}
                                key={uuidv4()}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={userData.work2}

                                label="Work-2"
                                name="work2"
                                variant="outlined"
                                // value={work3}
                                onChange={handleChange}
                                key={uuidv4()}
                            />
                        </div>
                    </WorkInputsStyled>
                    <div>
                        <TextField
                            fullWidth
                            type="text"

                            label="Lives In"
                            name="city1"
                            variant="outlined"
                            defaultValue={userData.city1}
                            // value={city1}
                            onChange={handleChange}
                            key={uuidv4()}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="text"

                            label="City"
                            name="city2"
                            variant="outlined"
                            defaultValue={userData.city2}
                            onChange={handleChange}
                            key={uuidv4()}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            name="country"

                            defaultValue={userData.country}
                            label="Country"
                            key={uuidv4()}
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </div>
                    <WorkTextStyled>
                        <span>Education</span>
                    </WorkTextStyled>
                    <WorkInputsStyled>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={userData.education1}
                                key={uuidv4()}

                                label="Education-1"
                                name="education1"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={userData.education2}

                                label="Education-2"
                                variant="outlined"
                                name="education2"
                                key={uuidv4()}
                                onChange={handleChange}
                            />
                        </div>
                    </WorkInputsStyled>

                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Relationship
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="relationship"
                                label="Relationship"
                                onChange={handleChange}
                                defaultValue={userData.relationship}
                                key={uuidv4()}
                            >
                                <MenuItem value="Married">Married</MenuItem>
                                <MenuItem value="Unmarried">Unmarried</MenuItem>
                                <MenuItem value="Doesn't matter">Doesn't matter</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="number"
                            name="mobile"
                            id={uuidv4()}
                            onChange={handleChange}
                            label="Mobile No."
                            key={uuidv4()}
                            defaultValue={userData.mobile}
                            variant="outlined"
                        />
                    </div>
                    <UpdateBtnStyled className="updateBtnDiv">
                        <button
                            onClick={() => {
                                if (payload2.password === "") {
                                    delete payload2.password;
                                }
                                dispatch(updateUser(payload2, userData._id));
                                // dispatch(getUser(userData._id));
                                console.log(payload2, "from update");
                                setTimeout(() => {
                                    refreshPage()
                                    handleEditProfileClose()
                                }, 2000)




                            }}
                            className="updateDetailsBtn"
                        >
                            Update
                        </button>
                    </UpdateBtnStyled>
                </Box>
            </Modal>
        </EditProfieModalStyled>
    );
}

const EditProfieModalStyled = styled.div``;
const UpdateBtnStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--font-light-color);
  height: 5rem;
  padding-top: 1rem;
  button {
    height: 2rem;
    width: 6rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--primary-background-color);
    cursor: pointer;
    font-weight: bold;
    outline: none;
    border: none;
    font-size: 1.1rem;
  }
`;
const EditDetailsStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--font-light-color);
  height: 5rem;
  & > div:nth-child(1) {
    width: 68%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.8rem;
    font-weight: bold;
  }

  & > div:nth-child(2) {
    padding-left: 7rem;

  svg{
      cursor: pointer;
  }
  }
`;

const WorkTextStyled = styled.div`
  span {
    color: var(--font-dark-color);
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const WorkInputsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;
