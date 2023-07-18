import {
  fireEvent,
  logRoles,
  screen,
  waitFor,
  render,
} from "@testing-library/react"
import HomeContainer from "./../../src/Components/HomeContainer"
import testRendersElements from "../Utils/testRendersElements"
import renderWithWrappers from "../Utils/renderWithWrappers"

beforeEach(() => {
  renderWithWrappers(<HomeContainer />)
})

describe("HomeContainer Elements", () => {
  test("renders header", () => {
    testRendersElements("heading")
  })

  test("renders paragraph", () => {
    testRendersElements("paragraph")
  })

  test("renders button", () => {
    testRendersElements("button")
  })

  test("renders image", () => {
    testRendersElements("img")
  })
})
