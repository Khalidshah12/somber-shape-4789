const express = require('express');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.route');
const {adminRouter} = require('./routes/Admin.route');
const cors = require('cors');
const app = express();
const PORT = 8080;

// Middleware to help to interact API
app.use(express.json());
app.use(cors());

// All Router
app.use('/users', userRouter);
app.use('/admins', adminRouter);


app.listen(PORT, () => {
    // Connection To the DB
    connection();
    console.log(`Server Running on http://localhost:${PORT}`);
});

