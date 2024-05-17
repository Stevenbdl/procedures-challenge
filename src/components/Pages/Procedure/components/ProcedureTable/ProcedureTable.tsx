import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { ProcedureContext } from "../../../../../common/context/procedure";
import { getProcedureNumber } from "../../../../../common/utils/utils";
import "./ProcedureTable.css";

export const ProcedureTable = () => {
  const { procedures } = useContext(ProcedureContext);
  return (
    <Grid
      container
      spacing={1}
      className="procedure-table"
      data-testid="procedure-table"
    >
      {procedures.map((procedure, index) => (
        <Grid item md={8} key={procedure.id}>
          <Box
            minWidth={941}
            minHeight={78}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={"10px"}
            sx={{ backgroundColor: "#ffffff", padding: "16px 94px 17px 34px" }}
          >
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Grid container direction="column">
                  <Grid item className="procedure-table-header">
                    {`Procedimiento ${getProcedureNumber(index + 1)}`}
                  </Grid>
                  <Grid item className="procedure-table-column">
                    {procedure.name}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Grid item className="procedure-table-header">
                    Codigo
                  </Grid>
                  <Grid item className="procedure-table-column">
                    {procedure.code}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Grid item className="procedure-table-header">
                    Reclamado RD$
                  </Grid>
                  <Grid
                    item
                    className="procedure-table-column"
                  >{`RD$ ${procedure.reclaimed}`}</Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Grid item className="procedure-table-header">
                    Diferencia RD$
                  </Grid>
                  <Grid
                    item
                    className="procedure-table-column"
                  >{`RD$ ${procedure.difference}`}</Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Grid item className="procedure-table-header">
                    Autorizado RD$
                  </Grid>
                  <Grid
                    item
                    className="procedure-table-column"
                  >{`RD$ ${procedure.authorized}`}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
