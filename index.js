const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const applicationRoutes = require("./routes/applicationRoutes.js");

mongoose.connect("mongodb+srv://saga-admin:saga-admin@one-saga.f4w4zar.mongodb.net/one-saga?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//connection check
let db = mongoose.connection;
//if con error
db.on("error", console.error.bind(console, "connection error"));
//if con okay
db.once("open", () => console.log("CLOUD DB CONNECTION - OK"));


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//endpoint for users
app.use("/users", userRoutes);
//endpoint for enrollment
app.use("/enrollment", applicationRoutes);



app.listen(port, () => {
    console.log(`API IS NOW ONLINE ON PORT ${port}`)
});