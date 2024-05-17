import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProcedureContext } from "../../../../../common/context/procedure";
import { ProcedureTable } from "./ProcedureTable";

test("Render empty procedure table", async () => {
  const procedures: Procedure[] = [];
  render(
    <ProcedureContext.Provider
      value={{
        procedures: procedures,
        fetchProcedureData: () => {},
        setProcedures: () => {},
      }}
    >
      <ProcedureTable />
    </ProcedureContext.Provider>
  );

  const procedureTableElement = screen.getByTestId("procedure-table");
  expect(procedureTableElement.hasChildNodes()).toBe(false);
});

test("Render populated procedure table", async () => {
  const procedure: Procedure = {
    id: 1,
    name: "Esclerosis",
    code: "1010",
    reclaimed: "500",
    difference: "500",
    authorized: "500",
  };
  const procedures: Procedure[] = [procedure];
  render(
    <ProcedureContext.Provider
      value={{
        procedures: procedures,
        fetchProcedureData: () => {},
        setProcedures: () => {},
      }}
    >
      <ProcedureTable />
    </ProcedureContext.Provider>
  );

  //Check headers
  const procedureColumn = screen.getByText("Procedimiento 01").parentNode;
  const codeColumn = screen.getByText("Codigo").parentNode;
  const reclaimedColumn = screen.getByText("Reclamado RD$").parentNode;
  const differenceColumn = screen.getByText("Diferencia RD$").parentNode;
  const authorizedColumn = screen.getByText("Autorizado RD$").parentNode;

  expect(procedureColumn?.hasChildNodes()).toBe(true);
  expect(procedureColumn?.firstChild?.textContent).toBe("Procedimiento 01");

  expect(codeColumn?.hasChildNodes()).toBe(true);
  expect(codeColumn?.firstChild?.textContent).toBe("Codigo");

  expect(reclaimedColumn?.hasChildNodes()).toBe(true);
  expect(reclaimedColumn?.firstChild?.textContent).toBe("Reclamado RD$");

  expect(differenceColumn?.hasChildNodes()).toBe(true);
  expect(differenceColumn?.firstChild?.textContent).toBe("Diferencia RD$");

  expect(authorizedColumn?.hasChildNodes()).toBe(true);
  expect(authorizedColumn?.firstChild?.textContent).toBe("Autorizado RD$");

  //Check row
  expect(procedureColumn?.lastChild?.textContent).toBe(procedure.name);
  expect(codeColumn?.lastChild?.textContent).toBe(procedure.code);
  expect(reclaimedColumn?.lastChild?.textContent).toBe(
    `RD$ ${procedure.reclaimed}`
  );
  expect(differenceColumn?.lastChild?.textContent).toBe(
    `RD$ ${procedure.difference}`
  );
  expect(authorizedColumn?.lastChild?.textContent).toBe(
    `RD$ ${procedure.authorized}`
  );
});
