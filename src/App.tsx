import { useState } from 'react'
import LoginPage from './pages/auth/loginPage'
import TweetsPage from './pages/tweets/tweetsPage'

function App() {
    //App es el propietario del estado, y loginPage lo comunica hacia arriba(App) para que App haga el cambio de estado
    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(true)
    }
    return isLogged ? <TweetsPage /> : <LoginPage onLogin={handleLogin} />
}

export default App
