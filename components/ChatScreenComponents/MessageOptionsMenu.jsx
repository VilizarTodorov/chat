import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React, { Fragment, useRef, useState } from "react";

const MessageOptionsMenu = (props) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    props.setIsMenuOpen((prev) => !prev);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    props.setIsMenuOpen(false);
  };

  const deleteMessage = (event) => {
    props.deleteMessage();
    handleClose(event);
  };

  const startEdit = (event) => {
    props.setIsEditing(true);
    handleClose(event);
  };

  return (
    <Fragment>
      <IconButton
        className={`${props.classes.messageOptions} ${props.isMenuOpen && props.classes.menuOpen}`}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <KeyboardArrowDownIcon />
      </IconButton>

      <Popper
        style={{ zIndex: 100 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement="bottom-end"
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-end" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow">
                  <MenuItem onClick={startEdit}>Edit</MenuItem>
                  <MenuItem onClick={deleteMessage}>Delete</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default MessageOptionsMenu;
