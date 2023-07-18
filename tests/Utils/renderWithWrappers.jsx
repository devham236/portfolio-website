import { ContextProvider } from "../../src/Context"
import { render } from "@testing-library/react"

function renderWithWrappers(component) {
  return render(<ContextProvider>{component}</ContextProvider>)
}

export default renderWithWrappers
