import { client } from '../../api/client'
import { Tweet } from './types'

const tweetsUrl = '/api/tweets'

// funcion async para obtener los tweets de sparest
export const getLatestTweets = async () => {
    // Realizamos una petición GET a la API utilizando la instancia de Axios (`client`)
    const tweets: Tweet[] = await client.get(tweetsUrl)

    return tweets
}
