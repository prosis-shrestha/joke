# Joke Deployment

Express app that serves a random joke via the `funny-jokes-cli`.

**Live app:** https://joke-swiv.onrender.com

## Deployment

Every push to `main` triggers a GitHub Action (`.github/workflows/deploy.yml`)
that calls a Render Deploy Hook, deploying a new version automatically.

## Run locally

```bash
npm install
npm start
```

App runs on http://localhost:3000
