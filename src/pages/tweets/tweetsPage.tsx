import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import styles from './tweetsPage.module.css'
import { getLatestTweets } from './service'
import { Tweet } from './types'
import './tweetsPage.css'

const green = true
const pepa = false

function TweetsPage() {
    // Declaramos un estado `tweets` para almacenar los tweets obtenidos de la API
    // `setTweets` se usará para actualizar este estado
    const [tweets, setTweets] = useState<Tweet[]>([])

    // useEffect se ejecuta después del primer renderizado del componente (componentDidMount en clases)
    useEffect(() => {
        // Llamamos a `getLatestTweets`, que obtiene los tweets desde la API
        getLatestTweets().then((response) => {
            console.log(response)
            // Cuando la petición se completa, actualizamos el estado con los tweets recibidos
            setTweets(response)
        })
    }, []) // La dependencia `[]` significa que solo se ejecuta una vez al montar el componente

    // prueba useState con boton
    const [tail, changeTail] = useState(false)
    const handleCLick = () => {
        changeTail((tail) => !tail) // invierte el valor actual de tail cada vez que se hace click
    }
    return (
        <>
            <div>
                <h1 className={clsx('TweetDiv font-bold', { green })}>
                    Tweets page
                </h1>
                <h1 className={clsx('green', { pepa })}>
                    Tweets page clsx test
                </h1>
                <h3 className={styles.ElH3}>Modules.css</h3>
                <h2 className="text-yellow-800 bg-green-600 p-3 ">
                    Tailwind example
                </h2>

                <div className="flex justify-around">
                    <span>{tail}</span>
                    <button
                        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={handleCLick}
                    >
                        Change BG-color
                    </button>
                </div>

                <h3 className={clsx('mixed', { tail })}>
                    mix tailwind clsx And UseState
                </h3>
                <ol className="flex  bg-blue-400">
                    {tweets.map((tweet) => (
                        <li
                            key={tweet.id}
                            className="font-mono bg-blue-700 m-8"
                        >
                            <br></br>
                            {tweet.content}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}
export default TweetsPage
