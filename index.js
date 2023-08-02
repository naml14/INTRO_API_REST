const express = require('express');
const app = express();
const port = 3000;
const ApiRouter = require('./routes/ApiRoutes');

app.use(express.json());
app.use('/api', ApiRouter);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});