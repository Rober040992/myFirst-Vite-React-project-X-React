import { login } from './service'

function LoginPage() {
    //aqui podriamos tipar la funcion pero es mejor tipar el arg.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() //preventDefault para que no haga por defecto el submit y no recargue la web
        try {
            const response = await login({
                username: event.target.username.value,
                password: event.target.password.value,
            })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
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
                    />
                </label>
                <label className="p-1">
                    Password:
                    <input
                        type="password"
                        name="password"
                        className="border-2 border-blue-500 rounded-md p-1"
                    />
                </label>
                <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LoginPage
