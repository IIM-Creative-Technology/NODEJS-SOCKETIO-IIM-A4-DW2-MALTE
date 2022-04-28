# NODEJS-SOCKETIO-IIM-A4-DW2-MALTE

| Environment | URL                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Prod        | <a href="https://iim-a4-nodejs-malte-grp2.herokuapp.com/">https://iim-a4-nodejs-malte-grp2.herokuapp.com/     |


## Presentation

This project is a sandbox project to learn Node.js development. We have two main goals :

-   learn how to create an API with Node.js and Express
-   follow a solid Github workflow

## Technical choices

### Sequelize

We choose to use the most use ORM for Node.js : [Sequelize](https://sequelize.org/). This choice was motivated by our low technical level on Node.js environment and by the huge community arround the library.

### Deployment

Our prod API are host on Heroku.

Our prod is managed by Github action. On each push on `main` the application is published on Heroku 

We use the official [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) addon the create our databases.
  
  **Table of Contents**
-------------
* [Getting Started](#getting-started)
  - [Required](#required)
  - [NPM Commands](#npm-commands)
  - [PR template](#pr-template)
### Getting Started
#### Required
- docker [`Getting Started`](https://www.docker.com/get-started/)

Install node packages of the project by using [`yarn`](https://yarnpkg.com/) or [`npm`](https://www.npmjs.com/):
```bash
npm install
```
#### NPM commands
All commands has to be done in the root folder of the project.
### Install
```bash
npm install
```
### Start
Starting the project by using `$ npm start` in root folder
```bash
npm start
```
### Jest
Starting all the units test by using `$ npm test` in root folder
```bash
npm test
```

### ENV
Create the `.env` file by copying and pasting the `.env.example` 

### Docker
Now you have to start the docker compose
```bash
docker-compose up --build
```

#### PR template

```text
| Q             | A
| ------------- | ---
| Branch?       | branch targeted -> current branch
| Bug fix?      | yes/no
| New feature?  | yes/no
| Deprecations? | yes/no
| Tickets       | Ticket #/no (if from ticket specify wich one)
```
  
### Gitflow

We use the principle of Gitflow for the management of our branches, commits, releases
