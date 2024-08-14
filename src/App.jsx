//@ts-check

import { Navbar } from "./components"
import { Home } from "./pages"
import React from "react"


function App() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 from-50% to-zinc-950 text-slate-300">
      <div className="max-w-[80rem] mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="min-h-dvh">
          <Home />
        </main>
      </div>
    </div>
  )
}

export default App
