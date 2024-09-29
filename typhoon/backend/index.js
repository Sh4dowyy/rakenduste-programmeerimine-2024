const express = require('express');
const cors = require('cors');  // CORS middleware
const app = express();
const port = 8080;
const morgan = require("morgan");

const catsRoutes = require('./routes/cats.routes');
const hobbyRoutes = require("./routes/hobby.routes");

app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse incoming JSON requests
app.use(morgan("dev"));

app.use('/cats', catsRoutes);
app.use('/hobbies', hobbyRoutes)
//app.use("/examples", exampleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});