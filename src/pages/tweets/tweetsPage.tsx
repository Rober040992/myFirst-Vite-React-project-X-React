import { clsx } from 'clsx'
import './tweetsPage.css'
import styles from './tweetsPage.module.css'

const tweets = [
    {
        content:
            "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
        userId: 1,
        updatedAt: '2021-03-15T18:23:57.579Z',
        id: 1,
    },
    {
        content:
            "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
        userId: 1,
        updatedAt: '2021-03-15T18:24:56.773Z',
        id: 2,
    },
]

const green = true
const tail = false
const pepa = false

function TweetsPage() {
    return (
        <div>
            <h1 className={clsx('TweetDiv', { green })}>Tweets page</h1>
            <h1 className={clsx("green", {pepa})}>Tweets page clsx test</h1>
            <h3 className={styles.ElH3}>Modules.css</h3>
            <h2 className='text-yellow-800 bg-green-600 p-3 '>Tailwind example</h2>
            <h3 className={clsx("mixed", {tail})}>mix tailwind clsx</h3>
            <ol>
                {tweets.map((tweet) => (
                    <li key={tweet.id}
                    className='font-mono bg-blue-700 m-8'>
                        <br></br>
                        {tweet.content}
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default TweetsPage
