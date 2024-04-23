import React, { useState } from "react";
import { Box, Modal, Fade, Button, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function UpdateProfilePictureModal({
  open,
  handleClose,
  updateProfilePicture,
}) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("profilePicture", file);
      updateProfilePicture(formData);
      handleClose();
    }
  };

  if (!open) return null;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <span className="close-button" onClick={handleClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <label htmlFor="profilePicture">
              Upload a new profile picture:
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button type="submit">Update Picture</button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}

export default UpdateProfilePictureModal;
