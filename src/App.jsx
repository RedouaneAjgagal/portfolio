//@ts-check

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Home, Root } from "./pages"
import React from "react"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
