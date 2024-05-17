import { Grid, Typography } from "@mui/material";
import React from "react";
import { NotFound } from "../../../assets/icons/NotFound";
import "./NotDataFound.css";

interface Props {
  children?: React.ReactNode;
  renderInPage?: boolean;
}

export const NoDataFound = ({ children, renderInPage = true }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: renderInPage ? "80vh" : "0vh" }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <NotFound />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography className="no-data-found-text">
          No hay datos para mostrar
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        {children}
      </Grid>
    </Grid>
  );
};
