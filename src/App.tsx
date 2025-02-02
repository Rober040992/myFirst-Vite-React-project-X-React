import { useState } from 'react'
import LoginPage from './pages/auth/loginPage'
import TweetsPage from './pages/tweets/tweetsPage'

interface Props {
    defaultIsLogged: boolean
}

function App({ defaultIsLogged }: Props) {
    //App es el propietario del estado, y loginPage lo comunica hacia arriba(App) para que App haga el cambio de estado
    const [isLogged, setIsLogged] = useState(defaultIsLogged)

    const handleLogin = () => {
        setIsLogged(true)
    }
    const handleLogOut = () => {
        setIsLogged(false)
    }
    return isLogged ? (
        <TweetsPage onLogout={handleLogOut} />
    ) : (
        <LoginPage onLogin={handleLogin} />
    )
}

export default App
