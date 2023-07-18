import { fireEvent, screen, waitFor } from "@testing-library/react"
import Navbar from "./../../src/Components/Navbar"
import renderWithWrappers from "../Utils/renderWithWrappers"
import testRendersElements from "../Utils/testRendersElements"

beforeEach(() => {
  renderWithWrappers(<Navbar />)
})

describe("Navbar elements", () => {
  test("renders logo", () => {
    testRendersElements("img")
  })

  test("renders links", () => {
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(3)
  })

  test("renders toggle", () => {
    testRendersElements("toggle")
  })
})

describe("Toggle functionality", () => {
  test("darkMode is false/off on first render", async () => {
    const toggle = await waitFor(() => screen.getByRole("toggle"))
    expect(toggle.getAttribute("name")).toBe("light")
  })

  test("darkMode is true/on when clicking toggle", () => {
    const toggle = screen.getByRole("toggle")
    fireEvent.click(toggle)
    expect(toggle.getAttribute("name")).toBe("dark")
  })
})
