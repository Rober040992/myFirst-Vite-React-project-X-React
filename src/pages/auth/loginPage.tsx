import { useState } from 'react'
import { login } from './service'

interface Props {
    onLogin: () => void
}

function LoginPage({ onLogin }: Props) {
    // controlando un Input
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //aqui podriamos tipar la funcion pero es mejor tipar el arg.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() //preventDefault para que no haga por defecto el submit y no recargue la web
        try {
            //Este código extrae los valores de los campos de entrada (input) del formulario y los pasa a la función login().
            const form = event.currentTarget as HTMLFormElement
            const username = (
                form.elements.namedItem('username') as HTMLInputElement
            ).value
            const password = (
                form.elements.namedItem('password') as HTMLInputElement
            ).value

            const response = await login({ username, password })
            console.log('desde login page', response)
            onLogin()
        } catch (error) {
            console.error(error)
        }
    }

    // controlando un Input
    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value)
    }

    const isDisabled = !username || !password // logica para activar/desactivar boton

    return (
        <div className="max-w-sm mx-auto">
            <h1>Login to Twitter</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col m-3"
                action=""
            >
                <label className="p-1">
                    UserName:
                    <input
                        type="text"
                        name="username"
                        className="border-2 border-blue-500 rounded-md p-1"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label className="p-1">
                    Password:
                    <input
                        type="password"
                        name="password"
                        className="border-2 border-blue-500 rounded-md p-1"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button
                    disabled={isDisabled}
                    type="submit"
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LoginPage
