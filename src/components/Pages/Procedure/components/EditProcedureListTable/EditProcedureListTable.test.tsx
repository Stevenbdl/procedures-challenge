import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { EditProcedureListTable } from "./EditProcedureListTable";

test("it should render Edit Procedure List Table", async () => {
  render(
    <EditProcedureListTable procedureList={[]} setProcedureList={() => {}} />
  );
  expect(screen.getByTestId("edit-procedure-list-table")).toBeInTheDocument();
});
