import { clsx } from 'clsx'
import './tweetsPage.css'
import { useEffect, useState } from "react";
import styles from './tweetsPage.module.css'
import { getLatestTweets } from './service'

const green = true
const tail = false
const pepa = false

function TweetsPage() {
    const [tweets, setTweets] = useState<Tweet[]>([]);
  
    useEffect(() => {
      getLatestTweets().then((response) => {
        setTweets(response);
      });
    }, []);
    return (
        <div>
            <h1 className={clsx('TweetDiv font-bold', { green })}>Tweets page</h1>
            <h1 className={clsx("green", {pepa})}>Tweets page clsx test</h1>
            <h3 className={styles.ElH3}>Modules.css</h3>
            <h2 className='text-yellow-800 bg-green-600 p-3 '>Tailwind example</h2>
            <h3 className={clsx("mixed", {tail})}>mix tailwind clsx</h3>
            <ol className='flex  bg-blue-400'>
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
