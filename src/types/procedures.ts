interface Procedure {
  id: number;
  name: string;
  code: string;
  reclaimed: string;
  difference: string;
  authorized: string;
}

type ProcedureContext = {
  procedures: Procedure[],
  setProcedures: React.Dispatch<React.SetStateAction<Procedure[]>>,
  fetchProcedureData: () => void
};