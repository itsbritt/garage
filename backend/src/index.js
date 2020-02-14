const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO Use express middleware to handle cookies
server.express.use(cookieParser());
// allows use to access incoming cookei as object rather than unreadable stream
// TODO Use express middleware to populate current user

server.start(
  { cors: { credentials: true, origin: process.env.FRONTEND_URL } },
  deets => {
    console.log(`server is now running on port http://localhost:${deets.port}`);
  }
);
