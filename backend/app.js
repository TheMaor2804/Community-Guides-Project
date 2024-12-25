const express = require('express');
const corsMiddleware = require('./middlewares/cors');
const { handleError } = require('./utils/handleErrors');
const loggerMiddleware = require('./logger/loggerService');
const connectToDatabase = require('./db/dbService');
const router = require('./router/router');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(corsMiddleware);
app.use(express.json({ limit: '10mb' }));

app.use(loggerMiddleware());

app.use(express.static('public'));

app.use(router);

app.use((err, req, res, next) => {
    const message = err || "Internal Server Error";
    return handleError(res, 500, message);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectToDatabase();
})