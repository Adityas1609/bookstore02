const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/database02")
    .then(() => {
        console.log("Database02 Connected!");
    })
    .catch((err) => {
        console.log(err.message);
    });


