import { screen } from "@testing-library/react"

function testRendersElements(role) {
  const element = screen.getByRole(role)
  expect(element).toBeInTheDocument()
}

export default testRendersElements
