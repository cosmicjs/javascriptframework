# JavaScript Framework

[javascriptframework.org](http://javascriptframework.org), a leaderboard of top JavaScript frameworks.

[![Netlify Status](https://api.netlify.com/api/v1/badges/388637c1-8040-4b2d-84b4-1cfa38cd62bb/deploy-status)](https://app.netlify.com/sites/javascript-framework/deploys)

## Contributing

Missing a JavaScript Framework here? Just fork the repo and add the provider with an `index.md` file in the `content/sites/<name>/` folder.

Make sure to follow the following rules:

- **JavaScript Framework:** Can be a full framework or library utility.
- **Stick to the format:** Fill out all the same fields as the other JavaScript frameworks in `content/sites`.
- **Short description:** Keep all the details for the body text, keep the description for the overview page short and sweet.

## Usage

Be sure that you have the latest node and npm installed, then clone this repository and run:

```bash
npm install
npm start
```

Then visit http://localhost:8000/ - Gatsby will automatically reload when changes occur.

To test a production build locally, do:

```bash
npm run build
npm run serve
```

To run a production build for deployment:

```bash
npm run build
```

## Cosmic

javascriptframework.org is built and maintained by [Cosmic](https://www.cosmicjs.com), a headless CMS to manage content for JavaScript websites and apps.

## License

javascriptframework.org is released under the [MIT License](LICENSE).
Please make sure you understand its [implications and guarantees](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).
