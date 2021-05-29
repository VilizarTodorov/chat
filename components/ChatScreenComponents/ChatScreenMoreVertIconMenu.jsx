import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { Fragment, useRef, useState } from "react";

const SidebarMoreVertIconMenu = ({ openChatInfo }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const chatInfo = (event) => {
    openChatInfo();
    handleClose(event);
  };


  //   function handleListKeyDown(event) {
  //     if (event.key === "Tab") {
  //       event.preventDefault();
  //       setOpen(false);
  //     }
  //   }

  // return focus to the button when we transitioned from !open -> open
  //   const prevOpen = React.useRef(open);
  //   useEffect(() => {
  //     if (prevOpen.current === true && open === false) {
  //       anchorRef.current.focus();
  //     }

  //     prevOpen.current = open;
  //   }, [open]);

  return (
    <Fragment>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MoreVertIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition placement="bottom-end" disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-end" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={chatInfo}>Chat Info</MenuItem>
                  <MenuItem onClick={handleClose}>Delete chat</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default SidebarMoreVertIconMenu;
