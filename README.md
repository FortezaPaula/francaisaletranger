# francaisaletranger

> Plateforme de mise en relation des français bloqués à l&#39;étranger

## Requirements

- node 13.8+
- yarn
- Algolia Places
- `francaisaletranger-api` running

## Build Setup

Copy `.env.example` to `.env`

Set the right values on environment variables in `.env` file:
- `VUE_APP_API_URL`: URL of the backend API. See `francaisaletranger-api` project on GitHub.
- `ALGOLIA_APP_ID`: Your Algolia Places API ID 
- `ALGOLIA_API_KEY`: Your Algolia Places API Key

You'll need to create your Algolia account here to get an API ID & key: https://www.algolia.com/
 
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


