### Set up:

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on changing remotes.

1. To download the repository and install dependencies, run the following commands:

```bash
git clone git@github.com:Dassine/dassine.github.com.git
cd personal-site
yarn
```

If you do not have `yarn` installed, you may run `npm install` instead.

2. Next, you should create a `.env` file. To do this, run:

```bash
cp sample.env .env
```

and set values as appropriate. Most people will not need to make changes.

3. Run the following command to build the react application and serve it with hot module reloading:

```bash
npm run dev
```

Navigate to `<ip>:<port>` default: [http://localhost:7999](http://localhost:7999) to view my website.

This completes set up instructions. Please continue reading to learn how to modify this site to make it your own.

### Deploying to Github Pages:

1. Change `NODE_ENV` to `production` in `.env`
2. Run `npm run deploy`

### Acknowlegements

- Project based on [mldangelo](https://github.com/mldangelo/personal-site)
- Template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).

### License

[MIT](https://github.com/mldangelo/personal-site/blob/master/LICENSE)
