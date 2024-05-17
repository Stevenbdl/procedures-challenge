import { Box, Grid, IconButton, InputLabel, TextField } from "@mui/material";
import { Delete } from "../../../../../assets/icons/Delete";
import { getProcedureNumber } from "../../../../../common/utils/utils";
import "./EditProcedureListTable.css";

interface Props {
  procedureList: Procedure[];
  setProcedureList: React.Dispatch<React.SetStateAction<Procedure[]>>;
}

export const EditProcedureListTable = ({
  procedureList,
  setProcedureList,
}: Props) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) => {
    event.preventDefault();
    const { name: field, value } = event.target;
    setProcedureList(
      [...procedureList].map((procedure) => {
        if (procedure.id === id) {
          return {
            ...procedure,
            [field]: value,
          };
        }
        return procedure;
      })
    );
  };

  const handleChangeNumeric = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) => {
    const { value } = event.target;

    if (/^(0|[1-9][0-9]*)$/.test(value) || value.length === 0) {
      handleChange(event, id);
    }
  };

  const handleDelete = (id: number) => {
    setProcedureList(procedureList.filter((procedure) => procedure.id !== id));
  };

  return (
    <Grid
      container
      className="edit-procedure-list-table"
      data-testid="edit-procedure-list-table"
      spacing={2}
    >
      {procedureList.map((procedure, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          key={procedure.id}
          data-testid="edit-procedure-list-row"
        >
          <Grid
            container
            spacing={3}
            wrap="nowrap"
            justifyContent="space-around"
          >
            <Grid item>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <IconButton
                  size="small"
                  onClick={() => handleDelete(procedure.id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Grid>
            <Grid item>
              <InputLabel className="edit-procedure-list-table-label">
                Procedure {getProcedureNumber(index + 1)}
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                name="name"
                onChange={(e) => handleChange(e, procedure.id)}
                value={procedure.name}
                className="edit-procedure-list-table-input"
                inputProps={{ "aria-label": "name" }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <InputLabel className="edit-procedure-list-table-label">
                Codigo
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                name="code"
                onChange={(e) => handleChange(e, procedure.id)}
                value={procedure.code}
                className="edit-procedure-list-table-input"
                inputProps={{ "aria-label": "code" }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <InputLabel className="edit-procedure-list-table-label">
                Reclamado RD$
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                name="reclaimed"
                onChange={(e) => handleChangeNumeric(e, procedure.id)}
                value={procedure.reclaimed}
                className="edit-procedure-list-table-input"
                inputProps={{ "aria-label": "reclaimed" }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <InputLabel className="edit-procedure-list-table-label">
                Diferencia RD$
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                name="difference"
                onChange={(e) => handleChangeNumeric(e, procedure.id)}
                value={procedure.difference}
                className="edit-procedure-list-table-input"
                inputProps={{ "aria-label": "difference" }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <InputLabel className="edit-procedure-list-table-label">
                Autorizado RD$
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                name="authorized"
                onChange={(e) => handleChangeNumeric(e, procedure.id)}
                value={procedure.authorized}
                className="edit-procedure-list-table-input"
                inputProps={{ "aria-label": "authorized" }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
