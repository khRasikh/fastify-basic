# Fastify BASIC APP

This is a very basic app built on Fastify Framework for practice purpose only.
make sure you have installed:

- `node js`
- `code editor` - I would prefer VS Code Editor

### Run App

- `npm run start ` start server without using nodemon
- `npm run dev ` start server using nodemon
- `npm run test ` test server using Fastify TAP

## CRUD OPERATIONS:

#

# GET

# POST http://localhost:4000/list/add

# PATCH http://localhost:4000/list/update

# DELETE http://localhost:4000/list/delete

# GET http://localhost:4000/list/info

GET

### GET Request

- get all data
  `curl -X 'GET http://localhost:4000' -Header 'accept: application/json'`
  `curl -X 'GET http://localhost:4000/list/info' -Header 'accept: application/json'`
  `curl -X 'GET http://localhost:4000/list/data' -Header 'accept: application/json'`

- get single data
  `curl --location --request GET 'http://localhost:4000/list/101'`

### POST Request

- post a record
  `curl --location --request post http://localhost:4000/list/add --header 'Content-Type: application/json' --data-raw '{"ID": 10002, "name": "Rasikh", "lastName": "Khudadad", "age": 23}'`

### UPDATE Request

- post a record
  `curl --location --request post http://localhost:4000/list/update --header 'Content-Type: application/json' --data-raw '{"ID": 10002, "name": "Rasikh", "lastName": "Khudadad", "age": 23}'`

### DELETE Request

`curl --location --request DELETE http://localhost:4000/delete --header 'Content-Type: application/json'`
# fastify-basic
