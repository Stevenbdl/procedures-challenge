import { createContext } from "react";

export const ProcedureContext = createContext<ProcedureContext>({
  procedures: [],
  setProcedures: () => {},
  fetchProcedureData: () => {}
});