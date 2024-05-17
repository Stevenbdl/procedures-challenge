import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DialogV2 } from "./DialogV2";

const TEST_TITLE = "Test";

test("It should render DialogV2", async () => {
  render(
    <DialogV2 title={TEST_TITLE} open={true} setOpen={() => {}} maxWidth="md" />
  );
  const svgCloseBtn = screen.getByTestId("dialogv2-close-btn");
  expect(screen.getByText(TEST_TITLE)).toBeInTheDocument();
  expect(svgCloseBtn).toBeInTheDocument();
});

test("It should close opened DialogV2", async () => {
  render(
    <DialogV2
      title={TEST_TITLE}
      open={false}
      setOpen={() => {}}
      maxWidth="md"
    />
  );
  const svgCloseBtn = screen.queryByTestId("dialogv2-close-btn");

  expect(screen.queryByText(TEST_TITLE)).toBeNull();
  expect(svgCloseBtn).not.toBeInTheDocument();
});
