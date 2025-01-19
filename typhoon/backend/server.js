const express = require('express');
const app = express();
const catsRoutes = require('./routes/cats.routes');

app.use(express.json()); // To parse JSON bodies
app.use('/cats', catsRoutes); // Ensure this line is present

// Other middleware and routes...

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 