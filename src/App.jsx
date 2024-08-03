import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home, Root } from "./pages"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
