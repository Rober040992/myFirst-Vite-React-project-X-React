import { useState } from 'react'
import LoginPage from "./pages/auth/loginPage"
import TweetsPage from './pages/tweets/tweetsPage'

function App() {
    const [isLogged, setIsLogged] = useState(false)

    return isLogged ? <TweetsPage/> : <LoginPage/>
}

export default App
