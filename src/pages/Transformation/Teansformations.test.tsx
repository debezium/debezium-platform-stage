import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Transformation } from "./Transformation";
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

describe("Transformation Component", () => {
  beforeEach(() => {
    vi.mocked(useData).mockReturnValue({
      darkMode: false,
      navigationCollapsed: false,
      setDarkMode: vi.fn(),
      updateNavigationCollapsed: vi.fn(),
    });
  });

  it("renders the Transformation component with correct content", () => {
    render(
      <MemoryRouter>
        <Transformation />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Coming Soon")).toBeInTheDocument();
    expect(screen.getByText("No transformation available")).toBeInTheDocument();
    expect(screen.getByText("Add Transformation")).toBeInTheDocument();
    expect(screen.getByText("Go to source")).toBeInTheDocument();
    expect(screen.getByText("Go to destination")).toBeInTheDocument();
    expect(screen.getByText("Go to pipeline")).toBeInTheDocument();
  });
});
