const connect = require("./db/connect");
const express = require("express");
const notFound=require("./middleware/notFound");
const app = express();
const Tasks = require("./routes/Tasks");
const port = process.env.PORT||3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
app.use(express.json());
app.use("/api/v1/Tasks", Tasks);
app.use(notFound)