# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
})
```
---------------------

# Steps to create a React-vite project

1. create main folder 
    - 1 npm create vite@latest
    - 2 choose react
    - 3 choose Ts or JS (SWC)
- this will create a scaffold
2. ``npm install`` in our root folder
- this will install our dependencies and many confing files defaulted
- our entry point is ``index.html`` linked to script ``main.tsx``
    2. 1.  optional and recomended - `git init` add and commit the repo
3. launching app
- use ``npm run dev`` developer enviroment mode 
- use ``npm run build`` to create a folder `dist` with our production code [minified] ready to deploy and ready to check in our browser
- use ``npm run lint`` to check our code is right 
4. how to prettier:
    - install extension
    - prettier.io/docs
    - run to install ``npm install --save-dev --save-exact prettier``
    - create file `.prettierrc` to format/config our code
    - to execute our prettier format `npx prettier . --write`
5. ready to start 
- recomended delete index.css , app.css and css imports to start from 0
- create folder pages and into it create folder `tweets`with a file .tsx , and other `auth`


## styles
### to handle classes => clsx: (its a github repo)
`npm i --save clsx` https://www.npmjs.com/package/clsx
- example 
```javascript
const green = true

function TweetsPage() {
    return (
        <div>
            <h1 className={clsx('TweetDiv', { green })}>Tweets page</h1>
        )
    }
```
### module.css 
- add .module.css ; and use and alias to import `import styles from` : exmple=> ``<h3 className={styles.ElH3}>``
### Tailwind:
- doc: tailwindcss.com/docs/install
- install `npm i tailwindcss @tailwindcss/vite`
- go to ``vite.config.ts`` then; 
    1. ``import tailwindcss from '@tailwindcss/vite'``
    2. call the function; =>
    plugins: [react(), ``tailwindcss()``]
    3. ``@import "tailwindcss"`` in our css file 
    4. import the file in our ``main.tsx``

## Fetch to API
### !!TODO LO QUE HACEMOS EN FRONTEND ES VISIBLE!!
- ``npm i axios``
- create a folder in src called api to get api staff in there
- create a client.ts 
- create .env.local to save enviroments vars
- create service.ts where we going to create our call funcion: example 
```javascript
import { client } from "../../api/client";
import { Tweet } from "./types";

const tweetsUrl = "/api/tweets";

export const getLatestTweets = async () => {
  const tweets: Tweet[] = await client.get(tweetsUrl);
  return tweets;
};
```
- usar 
```javascript
function TweetsPage() {
    const [tweets, setTweets] = useState<Tweet[]>([]);
  
    useEffect(() => {
      getLatestTweets().then((response) => {
        setTweets(response);
      });
    }, []); 
    return
}
```