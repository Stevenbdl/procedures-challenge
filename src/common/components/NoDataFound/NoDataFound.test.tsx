import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { NO_DATA_MESSAGE } from "../../constants/messages";
import { NoDataFound } from "./NoDataFound";

test("It should render NoDataFound with message and icon", async () => {
  const { container } = render(<NoDataFound />);

  const messageElement = container.getElementsByClassName("no-data-found-text");
  const svgNotFound = container.querySelector(
    "[data-icon='not-found']"
  ) as HTMLImageElement;
  expect(messageElement[0].textContent).toBe(NO_DATA_MESSAGE);
  expect(svgNotFound).toBeInTheDocument();
});
