import express from "express";
import userController from "../controllers/userController"

let router = express.Router();

let initAPIRoute = (app) => {
	router.post("/login", userController.handleLogin);
	router.post ("/createUser",userController.handleCreateUser);

	return app.use("/apiv1", router);
};

export default initAPIRoute;

const routes = express.Router();

