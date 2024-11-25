# NodeJS App with Express, Typescript, Docker, TypeORM and Jest

## Technologies
The major technologies that were used to build this project are:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)

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
