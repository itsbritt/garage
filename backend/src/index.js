const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO Use express middleware to handle cookies
server.express.use(cookieParser());
// allows use to access incoming cookei as object rather than unreadable stream
// TODO Use express middleware to populate current user

// decode JWT so we can get the user ID on each request

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put userID onto requests for future requests to access
    req.userId = userId;
  }
  next();
});

server.start(
  { cors: { credentials: true, origin: process.env.FRONTEND_URL } },
  deets => {
    console.log(`server is now running on port http://localhost:${deets.port}`);
  }
);
