const express = require('express');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.route');
const { adminRouter } = require('./routes/Admin.route');
const { productRouter } = require('./routes/Product.route');
const { authRouter } = require('./routes/Auth.route');
const cors = require('cors');
const { reviewRouter } = require('./routes/Review.route');
const { CartRouter } = require('./routes/Cart.route');
const app = express();
const PORT = 8080;

// Middleware to help to interact API
app.use(express.json());
app.use(cors());

// All Router
app.get('/', (req, res) => {
    res.send('Welcome to Home')
});
app.use('/users', userRouter);
app.use('/admins', adminRouter);
app.use('/products', productRouter);
app.use("/auth", authRouter)
app.use("/reviews", reviewRouter);
app.use("/cart", CartRouter)

app.listen(PORT, () => {
    // Connection To the DB
    connection();
    console.log(`Server Running on http://localhost:${PORT}`);
});

