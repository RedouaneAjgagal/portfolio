import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const Root = () => {
    return (
        <div className="bg-slate-50">
            <header>
                <Navbar />
            </header>
            <main className="min-h-svh">
                <Outlet />
            </main>
        </div>
    )
}

export default Root