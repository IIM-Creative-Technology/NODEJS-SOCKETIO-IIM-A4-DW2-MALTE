# NODEJS-SOCKETIO-IIM-A4-DW2-MALTE

| Environment | URL                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Prod        | <a href="https://node-socket-malte-prod.herokuapp.com/">https://node-socket-malte-prod.herokuapp.com/       |
| Pre-Prod    | <a href="https://node-socket-malte-develop.herokuapp.com/">https://node-socket-malte-develop.herokuapp.com/ |

## Presentation

This project is a sandbox project to learn Node.js development. We have two main goals :

-   learn how to create an API with Node.js and Express
-   follow a solid Github workflow

## Technical choices

### Sequelize

We choose to use the most use ORM for Node.js : [Sequelize](https://sequelize.org/). This choice was motivated by our low technical level on Node.js environment and by the huge community arround the library.

### Deployment

Our pre-prod and prod API are host on Heroku. Deployments were greatly ease by the team great knowledge with this host.

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
### Build
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
  
### Github workflow

_soon_
