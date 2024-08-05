import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const Root = () => {
    return (
        <div className="bg-slate-50 lg:min-h-dvh lg:h-full lg:flex lg:flex-col">
            <header className="h-16 w-full lg:h-20">
                <Navbar />
            </header>
            <main className="w-full mx-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default Root