import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditProcedureListModal } from "./EditProcedureListModal";

test("it should render Edit Procedure List Modal", async () => {
  render(<EditProcedureListModal open={true} setOpen={() => {}} />);

  expect(
    screen.getByTestId("edit-procedure-list-modal-title")
  ).toBeInTheDocument();
});

test("it should render Edit Procedure List Modal", async () => {
  render(<EditProcedureListModal open={true} setOpen={() => {}} />);

  expect(
    screen.getByTestId("edit-procedure-list-modal-title")
  ).toBeInTheDocument();
});

test("it should add an empty procedure", async () => {
  render(<EditProcedureListModal open={true} setOpen={() => {}} />);

  const addProcedureBtn = screen.getByTestId("add-procedure-btn");
  fireEvent.click(addProcedureBtn);
  expect(screen.getByTestId("edit-procedure-list-row")).toBeInTheDocument();
});
