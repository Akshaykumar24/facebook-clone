import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";


const style = {
    position: "absolute",
    top: "50%",
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

export default function EditProfieModal({ handleEditProfileClose, editProfileOpen }) {


    const [workData, setWorkData] = useState([
        { work: "Babasaheb Ambedkar Technological University" },
    ]);
    const [educationData, setEducationData] = useState([{ education: "kjdhf" }])
    const [work1, setWork1] = useState(workData.length > 0 ? workData[0].work : "")
    const [work2, setWork2] = useState(workData.length > 1 ? workData[1].work : "")
    const [work3, setWork3] = useState(workData.length > 2 ? workData[2].work : "")
    const [education1, setEducation1] = useState(educationData.length > 0 ? educationData[0].education : "")
    const [education2, setEducation2] = useState(educationData.length > 1 ? educationData[1].education : "")
    const [education3, setEducation3] = useState(educationData.length > 2 ? educationData[2].education : "")


    const [gender, setGender] = useState("");

    const handleChange = (e) => {
        setGender(e.target.value);
    };


    const handleWorkChange1 = (e) => {
        setWork1(e.target.value)
    };

    const handleWorkChange2 = (e) => {
        setWork2(e.target.value)

    };

    const handleWorkChange3 = (e) => {
        setWork3(e.target.value)

    };

    const handleEducationChange1 = (e) => {
        setEducation1(e.target.value)
    }
    const handleEducationChange2 = (e) => {
        setEducation2(e.target.value)
    }
    const handleEducationChange3 = (e) => {
        setEducation3(e.target.value)
    }


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
                            <span onClick={handleEditProfileClose}>
                                <CloseIcon />
                            </span>
                        </div>
                    </EditDetailsStyled>
                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            defaultValue="omkar"
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField required id="outlined-required" type="date" fullWidth />
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
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
                            defaultValue="Default Value"
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
                                defaultValue={work1}
                                id="outlined-basic"
                                value={work1}
                                label="Work-1"
                                variant="outlined"
                                onChange={handleWorkChange1}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={work2}
                                id="outlined-basic"
                                label="Work-2"
                                variant="outlined"
                                value={work3}
                                onChange={handleWorkChange2}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={work3}
                                id="outlined-basic"
                                label="Work-3"
                                variant="outlined"
                                value={work3}
                                onChange={handleWorkChange3}
                            />
                        </div>
                    </WorkInputsStyled>
                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            id="outlined-basic"
                            label="City"
                            variant="outlined"
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            defaultValue="omkar"
                            id="outlined-basic"
                            label="Country"
                            variant="outlined"
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
                                defaultValue={education1}
                                value={education1}
                                id="outlined-basic"
                                label="Education-1"
                                variant="outlined"
                                onChange={handleEducationChange1}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={education2}
                                value={education2}
                                id="outlined-basic"
                                label="Education-2"
                                variant="outlined"
                                onChange={handleEducationChange2}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                type="text"
                                defaultValue={education3}
                                value={education3}
                                id="outlined-basic"
                                label="Education-3"
                                variant="outlined"
                                onChange={handleEducationChange3}
                            />
                        </div>
                    </WorkInputsStyled>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Relationship"
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
                            type="number"
                            defaultValue="omkar"
                            id="outlined-basic"
                            label="Mobile No."
                            variant="outlined"
                        />
                    </div>
                    <UpdateBtnStyled className="updateBtnDiv">
                        <button className="updateDetailsBtn">Update</button>
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

    span {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: var(--primary-background-color);
      border: 1px solid var(--background-gray-color);
      cursor: pointer;

      :hover {
        background-color: var(--background-gray-color);
      }
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
margin-bottom:1rem;



`
