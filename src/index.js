import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import initAPIRoute from "./routes/api"
import connectDB from './config/connectDB'
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);
initAPIRoute(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
	console.log("Nodejs is running on", port);
});
	