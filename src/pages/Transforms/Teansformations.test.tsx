import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Transforms } from "./Transforms";
import { MemoryRouter } from "react-router-dom";
import { useData } from "../../appLayout/AppContext";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

vi.mock("../../appLayout/AppContext", () => ({
  useData: vi.fn(),
}));

describe("Transforms Component", () => {
  beforeEach(() => {
    vi.mocked(useData).mockReturnValue({
      darkMode: false,
      navigationCollapsed: false,
      setDarkMode: vi.fn(),
      updateNavigationCollapsed: vi.fn(),
    });
  });

  it("renders the Transforms component with correct content", () => {
    render(
      <MemoryRouter>
        <Transforms />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Coming Soon")).toBeInTheDocument();
    expect(screen.getByText("No transforms available")).toBeInTheDocument();
    expect(screen.getByText("Add Transforms")).toBeInTheDocument();
    expect(screen.getByText("Go to source")).toBeInTheDocument();
    expect(screen.getByText("Go to destination")).toBeInTheDocument();
    expect(screen.getByText("Go to pipeline")).toBeInTheDocument();
  });
});
