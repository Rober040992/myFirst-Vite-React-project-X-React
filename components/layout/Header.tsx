import { logout } from "../../src/pages/auth/service"

export interface HeaderProps {
    onLogout: () => void
    isLogged: boolean
}

export default function Header({ onLogout, isLogged }: HeaderProps) {
    const handleLogoutClick = async () => {
        await logout() //  esto me va a eliminar la cabecera
        onLogout() // esto me va a cambiar el estado de mi App
    }

    return (
    <header>
        <div></div>
        <nav>
            {isLogged ? (
                <button
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-200 to-lime-900 hover:bg-gradient-to-br shadow-lime-500/0 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleLogoutClick}
                >
                    LogIn
                </button>
            ) : (
                <button
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-200 to-lime-900 hover:bg-gradient-to-br shadow-lime-500/0 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleLogoutClick}
                >
                    LogOut
                </button>
            )}
        </nav>
    </header>
    )
}
