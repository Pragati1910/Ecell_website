require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const connectDB = require("../db/connect");
const authenticateUser = require("./middleware/authentication");

//routes
const authRouter = require("./routes/authRoutes");
const teamRouter = require("./routes/teamAlumniRoutes");
const blogsRouter = require("./routes/blogsRoutes");
const eventRouter = require("./routes/eventsRoutes");
const roleManagementRouter = require("./routes/roleManagementRoutes");
const carouselRouter = require("./routes/carouselRoutes");
const contactUsRouter =require("./routes/contactFormRoutes");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
  res.send("login");
});

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/blogs", blogsRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/roles", roleManagementRouter);
app.use("/api/v1/carousel", carouselRouter);
app.use("/api/v1/contactUs", contactUsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();