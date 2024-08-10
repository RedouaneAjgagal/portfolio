import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const Root = () => {
    return (
        <div className="bg-gradient-to-r from-zinc-900 from-50% to-zinc-950 text-slate-300">
            <div className="max-w-[80rem] mx-auto">
                <header>
                    <Navbar />
                </header>
                <main className="min-h-dvh">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Root