import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50% !important',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    minHeight: "8rem",
    display: 'grid',
    gridTemplateRows: "2fr 1fr",
    boxShadow: 24,
    p: 4,
};

export default function ErrorModal({ message, handleErrorModalClose, errorModalOpen }) {


    return (
        <div>

            <Modal
                open={errorModalOpen}
                onClose={handleErrorModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <span>{message}</span>
                    </div>
                    <div>
                        <Button onClick={handleErrorModalClose} variant="contained">{message === "Image is successfully uploaded" ? "Done" : "Back"}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}