import { Avatar, Container, makeStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState } from "react";
import ProfileModal from "./ProfileModal/ProfileModal";

const useStyles = makeStyles({
  container: {
    padding: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0)",
    transition: "all 0.3s ease-in-out 0.4s",
  },
  active: {
    transform: "scale(1)",
  },
  avatar: {
    width: "200px",
    height: "200px",
    cursor: "pointer",
  },
  label: {
    cursor: "pointer",
  },
  input: {
    display: "none",
  },
});

const ProfileAvatar = ({ isOpen, photoURL, email }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleImageOnChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
    setIsModalOpen(true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageUrl("");
    setImage(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container className={`${classes.container} ${isOpen && classes.active}`}>
      <Avatar
        className={classes.avatar}
        src={photoURL}
        alt={`${email}'s profile picture`}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      ></Avatar>
      <Menu
        keepMounted
        getContentAnchorEl={null}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Take Photo</MenuItem>
        <MenuItem onClick={handleClose}>
          <label className={classes.label} htmlFor="image">
            Upload Image
          </label>
          <input onChange={handleImageOnChange} id="image" type="file" className={classes.input} />
        </MenuItem>
      </Menu>
      <ProfileModal close={closeModal} isOpen={isModalOpen} title={"Drag the image to adjust"} img={imageUrl}></ProfileModal>
    </Container>
  );
};

export default ProfileAvatar;
