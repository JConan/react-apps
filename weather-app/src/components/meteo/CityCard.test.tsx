import * as React from "react";
import { render, screen } from "@testing-library/react";
import CityCard from "./CityCard";

describe("Country meteo card", () => {
  const closeFn = jest.fn();
  beforeEach(() => {
    render(<CityCard name="France" temperature={{ min: 10, max: 25 }} onCLose={closeFn} weather={{ description: "light rain", icon: "10d" }} />);
  });

  it("should have country name and is closeable", () => {
    expect(screen.getByRole("heading").innerHTML).toBe("France");
    screen.getByRole("button").click();
    expect(closeFn).toBeCalled();
  });

  it("should have max and min temperature", () => {
    expect(screen.getByLabelText("temperature min").innerHTML).toEqual("10°");
    expect(screen.getByLabelText("temperature max").innerHTML).toEqual("25°");
  });
});
