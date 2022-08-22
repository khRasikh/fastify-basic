const server = require("fastify")({ logger: true });
const dotenv = require("dotenv");
dotenv.config();

server.get("/", (req, res) => {
  res.send("Welcome to Fastify Basic App");
});

server.register(require("./functions/controllers/list"));
server.register(require("./functions/controllers/single"));
server.register(require("./functions/controllers/add"));
server.register(require("./functions/controllers/update"));
server.register(require("./functions/controllers/delete"));
server.register(require("./functions/controllers/info"));

server.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(` Server is now listening on ${address}`);
});
