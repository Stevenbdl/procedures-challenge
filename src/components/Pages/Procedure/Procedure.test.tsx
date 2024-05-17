import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { EDIT_PROCEDURES } from "../../../common/constants/messages";
import { ProcedureContext } from "../../../common/context/procedure";
import { Procedure } from "./Procedure";

test("It should render procedure page with empty procedures", async () => {
  const procedures: Procedure[] = [];

  render(
    <ProcedureContext.Provider
      value={{
        procedures: procedures,
        fetchProcedureData: () => {},
        setProcedures: () => {},
      }}
    >
      <Procedure />
    </ProcedureContext.Provider>
  );

  expect(screen.getByTestId("not-found-component")).toBeInTheDocument();
  expect(screen.getByText(EDIT_PROCEDURES)).toBeInTheDocument();
  expect(screen.queryByTestId("dialogv2-component")).not.toBeInTheDocument();
});

test("It should render procedure page and open DialogV2", async () => {
  const procedures: Procedure[] = [];

  render(
    <ProcedureContext.Provider
      value={{
        procedures: procedures,
        fetchProcedureData: () => {},
        setProcedures: () => {},
      }}
    >
      <Procedure />
    </ProcedureContext.Provider>
  );

  const editProceduresBtn = screen.getByText(EDIT_PROCEDURES);
  fireEvent.click(editProceduresBtn);
  expect(screen.getByTestId("dialogv2-component")).toBeInTheDocument();
});
