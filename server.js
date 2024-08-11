const app = require("./src/app/app");
const http = require("http");
const config = require("./src/config/config");
const dbConnect = require("./src/config/db");

const server = http.createServer(app);

async function startServer() {
  const port = config.port || 8000;

  await dbConnect();

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
