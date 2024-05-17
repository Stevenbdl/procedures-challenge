import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../utils/constants/localStorage";

export const useProcedureStore = () => {
  const [procedures, setProcedures] = useState<Procedure[]>([]);

  const fetchProcedureData = () => {
    const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsedData = JSON.parse(data);
        setProcedures(parsedData);
      }
  }

  useEffect(() => {
    fetchProcedureData();
  }, []);


  return {procedures, setProcedures, fetchProcedureData};
}