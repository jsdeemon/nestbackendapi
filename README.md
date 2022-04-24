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

SECRET_KEY=your_private_jwt_key
```
Also create .production.env and .development.env and paste the data inside

To start / stop Postgres server: 
```bash 
$ docker-compose up
$ docker-compose down 
```
 <p>If you have an old version of Docker compose, <a href="https://docs.docker.com/compose/cli-command/#install-on-linux" target="_blank">visit and install docker compose v2</a>. In case of usiong docker compose v2 you should run:</p>
 
``` 
$ docker compose up
$ docker compose down
 ```
All related to postgres data is located in folder pgdata. 
You can simply delete this folder and then run docker-compose up in order to delete all data from database

### Swagger documentation:
  <p><a href="http://localhost:5000/api/docs" target="_blank">http://localhost:5000/api/docs</a> </p>

```nest generate module nameofmodule
nest generate controller nameofcontroller
nest generate service nameofservice
```

  <p align="">Check this <a href="https://habr.com/ru/post/578744/" target="_blank">Habr article</a> to setup docker for PostreSQL and PGAdmin.</p>


### Postman web API  
<p align="">If you don't have installed Postman, you can use <a href="https://www.postman.com/api-evangelist/workspace/docker/overview" target="_blank">Web version of Postman</a> Just create an account and use from the web without installation.</p>

### Newman
<p>You can also use Newman and install it via NPM. Here is the link: <a href="https://github.com/postmanlabs/newman" target="_blank">https://github.com/postmanlabs/newman</a></p>

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

