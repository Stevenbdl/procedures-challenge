import {
  Breakpoint,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import { Close } from "../../../assets/icons/Close";
import "./DialogV2.css";

interface Props {
  title?: JSX.Element | string;
  maxWidth?: Breakpoint;
  fullWidth?: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const DialogV2 = ({
  title,
  open,
  setOpen,
  maxWidth = "md",
  fullWidth = true,
  children,
}: Props) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      data-testid="dialogv2-component"
    >
      <Grid container justifyContent="flex-end">
        <Grid item>
          <IconButton onClick={handleClose} data-testid="dialogv2-close-btn">
            <Close />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container className="dialog-v2-container" wrap="nowrap">
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justifyContent="space-between" wrap="nowrap">
            <Grid item xs={11} sm={11} md={11}>
              <DialogTitle>{title}</DialogTitle>
            </Grid>
          </Grid>
          <DialogContent>{children}</DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};
