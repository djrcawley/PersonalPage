# Personal Portfolio

The live site is [denniscawley.com](https://www.denniscawley.com).

## Getting started

You need [Node.js](https://nodejs.org/) 20.19 or newer on the 20.x line, or 22.12 or newer, plus npm. From this project folder, install the dependencies:

```sh
npm install
```

## Run the app locally

```sh
npm run start
```

Vite starts a development server. Open the local URL printed in the terminal (usually `http://localhost:5173`). The page refreshes as you edit files. Press **Ctrl+C** in the terminal to stop it.

In VS Code, you can also open the **NPM SCRIPTS** section in Explorer and run `start` there.

## Build and preview

Check TypeScript and create a production build in the `build/` folder:

```sh
npm run build
```

In VS Code, **Ctrl+Shift+B** runs the production build.

To preview that built site locally, run:

```sh
npm run serve
```

Open the local URL printed in the terminal. Run `npm run build` first whenever you want to preview the latest changes.

## Deploy

```sh
npm run deploy
```

This runs the `predeploy` script first, which builds the site, then publishes the contents of `build/` to the `gh-pages` branch using `gh-pages`. You need access to push to the repository's remote. Check the live site after deployment.

## What the npm scripts do

These scripts are defined in `package.json`; VS Code detects them automatically and lists them under **NPM SCRIPTS**.

| Script | What it does |
| --- | --- |
| `start` | Starts the Vite development server. |
| `build` | Checks TypeScript and creates the production site in `build/`. |
| `predeploy` | Builds the site automatically before `deploy`. |
| `deploy` | Publishes `build/` to the `gh-pages` branch. |
| `serve` | Locally previews the existing production build. |

## Technologies

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
