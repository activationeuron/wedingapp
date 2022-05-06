/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from "react";
import { Button, Dialog, Grid } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./style.css";

const SangeetLocationMap = ({ maxWidth, button, buttonClass, props }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="ti-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Fragment>
      <Button
        className={`btn ${buttonClass}`}
        style={{ fontFamily: "Lato, sans-serif" }}
        onClick={handleClickOpen}
      >
        {button}
        See Location
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Location Map
        </DialogTitle>
        <Grid className="modalBody modal-body">
          <Grid className="modalBody modal-body">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.977111077169!2d-117.9186194844072!3d33.787089239103025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7fb033fffff%3A0xe83843dbe08f1e44!2sDelta%20Hotels%20by%20Marriott%20Anaheim%20Garden%20Grove!5e0!3m2!1sen!2sin!4v1651703011250!5m2!1sen!2sin"></iframe>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default SangeetLocationMap;
