import EditIcon from "@mui/icons-material/Edit";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { NoDataFound } from "../../../common/components/NoDataFound/NoDataFound";
import { ProcedureContext } from "../../../common/context/procedure";
import { useProcedureStore } from "../../../common/hooks/procedure";
import "./Procedure.css";
import { EditProcedureListModal } from "./components/EditProcedureListModal/EditProcedureListModal";
import { ProcedureTable } from "./components/ProcedureTable/ProcedureTable";

export const Procedures = () => {
  const { procedures, setProcedures, fetchProcedureData } = useProcedureStore();

  const [openProcedureModal, setOpenProcedureModal] = useState(false);
  const handleEditProcedure = () => setOpenProcedureModal(true);

  return (
    <ProcedureContext.Provider
      value={{
        procedures,
        setProcedures,
        fetchProcedureData,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="procedures-container">
            <Grid item xs={12} md={12}>
              <div className="procedures-title">Procedimientos</div>
            </Grid>
            {procedures.length ? (
              <>
                <Grid item xs={12} sm={12} md={12} className="procedures-item">
                  <ProcedureTable />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className="procedures-item edit-btn"
                >
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEditProcedure}
                  >
                    Editar procedimientos
                  </Button>
                </Grid>
              </>
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {!procedures.length ? (
            <NoDataFound>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={handleEditProcedure}
              >
                Editar procedimientos
              </Button>
            </NoDataFound>
          ) : null}
        </Grid>
      </Grid>
      <EditProcedureListModal
        open={openProcedureModal}
        setOpen={setOpenProcedureModal}
      />
    </ProcedureContext.Provider>
  );
};
