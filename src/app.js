require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const connectDB = require('../db/connect')
const authenticateUser = require('./middleware/authentication');
//routes
const authRouter = require('./routes/authRoutes')
const team=require('./routes/teamAlumniRoutes');
const blog=require('./routes/blogsRoutes');
const event=require('./routes/eventsRoutes');
const roleMangement=require('./routes/roleMangementRoutes')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get('/', (req, res) => {
  res.send('login')
});


// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/team', team);
app.use('/api/v1/blogs', blog);
app.use('/api/v1/events', event);
app.use('api/v1/rolemangement',roleMangement)

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