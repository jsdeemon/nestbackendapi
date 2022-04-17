## NestJs Server API 
Requirements: 
You need NodeJs and Docker to be installed 

Install dependencies: 
```bash 
$ npm install 
```
Create .env file in root folder with configurations: 
```bashPORT=5000
POSTGRES_HOST=localhost 
POSTGRES_USER=habrpguser
POSTGRES_DB=habrdb
POSTGRES_PASSWORD=pgpwd4habr
POSTGRES_PORT=5432
```
Also create .production.env and .development.env and paste the data inside

To start / stop Postgres server: 
```bash 
$ docker-compose up
$ docker-compose down 
```
All related to postgres data is located in folder pgdata. 
You can simply delete this folder and then run docker-compose up in order to delete all data from database

### Swagger documentation:
```http://localhost:5000/api/docs
```


```
nest generate module nameofmodule
nest generate controller nameofcontroller
nest generate service nameofservice
```

  <p align="center">Check this <a href="https://habr.com/ru/post/578744/" target="_blank">Habr article</a> to setup docker for PostreSQL and PGAdmin.</p>


## Running the app

```bash
# production mode
$ npm run start

# development watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

