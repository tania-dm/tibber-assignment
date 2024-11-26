# NodeJS App with Express, Typescript, Docker, TypeORM and Jest

## Technologies
The major technologies that were used to build this project are:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)
- [Express Status Monitor](https://github.com/RafalWilinski/express-status-monitor)
- [k6](https://grafana.com/docs/k6/latest/)

## Getting Started
Instructions to get the project up and running.

### Prerequisites
To run this project you will need the following dependencies

- NodeJS
- NPM
- Docker

### Environment Configuration
- Create `.env`: Copy `.env.template` to `.env`
- Update `.env`: Fill in necessary environment variables

### Development mode
Run
```
npm i
docker compose up
npm run dev
```

This will:
- install all project dependencies
- start Express server in development mode (which will restart upon any code change)
- create a PostgreSQL database server
- provide a database investigation tool named Adminer which can be accessed from http://localhost:8080

### Production mode
Run

`docker compose --profile production up`

This will create a docker container for the app and a PostgreSQL database server.

## Troubleshooting:

1. If you’re developing on a Mac, port 5000 might already be in use. The process running on this port turns out to be an AirPlay server. You can deactivate it in `System Preferences › Sharing` and uncheck AirPlay Receiver to release port 5000 or change the port in your `.env` file with something other than 5000.

2. If you receive this error
```
Error: Cannot find module @rollup/rollup-linux-arm64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828).
```
You can solve it by removing both `package-lock.json` and `node_modules` directory and run again `npm i`.

## App monitoring and load testing
### Metrics
You can use `/status` route to see realtime server metrics for the API.

![monitoring](https://github.com/user-attachments/assets/fe7d2081-b214-4178-9cb6-e87cb8a6c13d)

### Load testing
First [install](https://grafana.com/docs/k6/latest/set-up/install-k6/#install-k6) k6 locally.

You can run a stress test using the following command:
```
k6 run ./load-testing/api-test.js
```
![stress-test](https://github.com/user-attachments/assets/9e34aaf3-502e-4c4f-9e60-f4cf5794e141)
