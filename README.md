<h1 align="center">
    <img alt="seidor" title="#seidor" src=".github/logo.png" width="250px" />
</h1>

<h4 align="center">
	🚀 Seidor Veritas
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/PabloMelo11/seidor-challenger?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/PabloMelo11/seidor-challenger">

  <a href="https://www.linkedin.com/in/pablo-melo-377297161/">
    <img alt="Made by Pablo Melo" src="https://img.shields.io/badge/made%20by-PabloMelo11-%2304D361">
  </a>

  <a href="https://github.com/PabloMelo11/seidor-challenger/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/PabloMelo11/seidor-challenger">
  </a>

  <a href="https://github.com/PabloMelo11/seidor-challenger/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/PabloMelo11/seidor-challenger">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 💻 Project

This application and the challenge proposed by Seidor Veritas.

Import insomnia to test requests:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=server-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2FPabloMelo11%2Fseidor-challenger%2Fmaster%2Fexport.json)

## 🚀 Technologies

This project was developed with the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Express](https://www.npmjs.com/package/express)
- [Typeorm](https://typeorm.io#/)
- [uuidv4](https://www.npmjs.com/package/uuidv4)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [PostgreSQL](https://www.postgresql.org)
- [Docker](https://www.docker.com)


## 🤔 Get Started

- You will only need to have Node installed on your machine, and after that, clone this repository:
```sh
  $ git clone https://github.com/PabloMelo11/seidor-challenger.git
```

After that, run the command below to install the dependencies.
```sh
  $ yarn install
```

create a postgreSQL database with the following settings:
```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "docker",
  "password": "docker",
  "database": "server",
}
```

If you want, start a docker container with the following command:
```sh
  sudo docker run --name server -p 5432:5432 -d -t kartoza/postgis
```

Start the interface to view the database.
```sh
  Postbird or DBeaver
```

create a database called:
```sh
  server
```

after creating the database, run the command to run the migrations:
```sh
  yarn typeorm migration:run
```

if you return the error: Function uuid_generate_v4() does not exists. Do the following:

- inside your interface (postbird or dbeaver) install an extension called 'uuuid-ossp'

Steps in Postbird:

```bash
  - Within the interface, select the database.
  - In the bottom left corner there will be a tool symbol.
  - Click on this symbol. It will open several extensions. Search for 'uuid-ossp' and install
```

Steps in Dbeaver:

```bash
  - Within the database created. Right-click on the database symbol.
  - Find the 'extensions' option and click on it
  - Look for 'uuid-ossp' option and enable
```

After installing the 'uuid-ossp' option in your database interface. Try to run the migrations again

After running the migrations. Run the command to start the api
```sh
  yarn dev:server
```

Run the following command to run the tests
```sh
  yarn test
```

## 🌴 Routes

**Motorists**

- (GET) List all motorists. Being able to pass the name of the motorist via query.

  ```sh
    http://localhost:3333/motorists or http://localhost:3333/motorists?name=Pablo
  ```

- (GET) List just only motorist. Include motorist id in the request.

```sh
  http://localhost:3333/motorists/ID_MOTORIST_HERE
```

- (POST) Create a new motorist. Include motorist name in the body request.

```json
  {
	  "name": "Pablo"
  }
```

- (PUT) Update one motorist, including the motorist id in the request and body.

```sh
  http://localhost:3333/motorists/ID_MOTORIST_HERE
```

```json
  {
	  "name": "Guilherme"
  }
```

- (DELETE) Ddelete a motorist by passing the motorist id.

```sh
  http://localhost:3333/motorists/ID_MOTORIST_HERE
```


**Cars**

- (GET) List all cars. Being able to pass the color and brand of the car via query.

  ```sh
    http://localhost:3333/cars or http://localhost:3333/cars?color=preto&brand=chevrolet
  ```

- (GET) List just only car. Include car id in the request

```sh
  http://localhost:3333/cars/ID_CAR_HERE
```

- (POST) Create a new car. Include car color, brand and board, in the body request.

```json
  {
    "color": "preto",
    "board": "PNG-126",
    "brand": "chevrolet"
}
```

- (PUT) Update one car, including the car id in the request and body.

```sh
  http://localhost:3333/cars/ID_CAR_HERE
```

```json
  {
    "color": "azul",
    "board": "126-PNG",
    "brand": "chevrolet"
}
```

- (DELETE) Ddelete a car by passing the car id

```sh
  http://localhost:3333/cars/ID_CAR_HERE
```

**Reservation**

- (GET) List all reservations. Output:

  ```JSON
    {
    "id": "b97f3ba0-fc31-4558-8c9a-42e1ac6f21a9",
    "motorist_id": "68713170-a989-4baf-839a-476547ddc3b0",
    "car_id": "63380c1a-c72a-4078-a6ac-3ce91c9d6970",
    "initial_date": "2020-10-16T18:34:19.578Z",
    "finish_date": null,
    "reason": "Viagem pela cidade",
    "created_at": "2020-10-16T21:34:19.653Z",
    "updated_at": "2020-10-16T21:34:19.653Z",
    "motorist": {
      "id": "68713170-a989-4baf-839a-476547ddc3b0",
      "name": "Guilherme P",
      "created_at": "2020-10-16T05:45:42.655Z",
      "updated_at": "2020-10-16T05:45:42.655Z"
    },
    "car": {
      "id": "63380c1a-c72a-4078-a6ac-3ce91c9d6970",
      "color": "preto",
      "board": "1447285",
      "brand": "chevrolet",
      "created_at": "2020-10-16T06:03:19.700Z",
      "updated_at": "2020-10-16T06:03:19.700Z"
    }
  }
  ```

- (POST) Create a new reservation. Include motorist_id, initial_date, car_id and reason in the body request.

```json
  {
    "motorist_id": "68713170-a989-4baf-839a-476547ddc3b0",
    "initial_date": "2020-10-16T18:36:31.253Z",
    "car_id": "63380c1a-c72a-4078-a6ac-3ce91c9d6970",
    "reason": "Viagem pela cidade"
  }
```
- (PUT) Update one reservation, including the finish_date in the request and body.

```json
  {
	  "finish_date": "2020-10-16T18:36:31.253Z"
  }
```

Made with ♥ by Pablo Melo :wave: [Get in touch!](https://www.linkedin.com/in/pablo-melo-377297161/)
