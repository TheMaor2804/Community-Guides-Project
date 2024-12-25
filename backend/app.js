const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json({ limit: '10mb' }));

app.use(express.static('public'));

app.use((err, req, res, next) => {
    const message = err || "Internal Server Error";
    return res.status(500).json({ message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})