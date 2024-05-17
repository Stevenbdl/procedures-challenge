import { Check } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import { DialogV2 } from "../../../../../common/components/DialogV2/DialogV2";
import { NoDataFound } from "../../../../../common/components/NoDataFound/NoDataFound";
import { ProcedureContext } from "../../../../../common/context/procedure";
import { STORAGE_KEY } from "../../../../../common/utils/constants/localStorage";
import { EditProcedureListTable } from "../EditProcedureListTable/EditProcedureListTable";
import "./EditProcedureListModal.css";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const EditProcedureListModal = ({ open, setOpen }: Props) => {
  const { procedures, fetchProcedureData } = useContext(ProcedureContext);
  const [procedureList, setProcedureList] = useState(procedures);
  const noData = procedureList.length === 0;

  useEffect(() => {
    setProcedureList([...procedures]);
  }, [procedures]);

  const handleClose = () => {
    setOpen(false);
    fetchProcedureData();
  };

  const handleAddProcedure = () => {
    let id = 1;
    for (let p of procedureList) {
      id = Math.max(p.id, id);
    }
    setProcedureList([
      ...procedureList,
      {
        id: id + 1,
        name: "",
        code: "",
        difference: "",
        reclaimed: "",
        authorized: "",
      },
    ]);
  };

  const handleSaveChanges = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(procedureList));
    enqueueSnackbar("Procedimiento guardado", { variant: "success" });
    handleClose();
  };

  return (
    <DialogV2
      open={open}
      setOpen={setOpen}
      maxWidth="lg"
      title={
        <Grid container spacing={3}>
          <Grid item className="edit-procedure-list-modal-title">
            Procedimientos
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Button
              variant="text"
              color="success"
              size="small"
              onClick={handleAddProcedure}
              fullWidth
            >
              <AddIcon /> Añadir procedimiento
            </Button>
          </Grid>
        </Grid>
      }
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          {noData ? (
            <NoDataFound renderInPage={false} />
          ) : (
            <EditProcedureListTable
              procedureList={procedureList}
              setProcedureList={setProcedureList}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={12} sm={12} md={10}>
              <Grid container justifyContent="flex-end" spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                  <Button fullWidth variant="outlined" onClick={handleClose}>
                    Cancelar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSaveChanges}
                  >
                    <Check /> Guardar cambios
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DialogV2>
  );
};
