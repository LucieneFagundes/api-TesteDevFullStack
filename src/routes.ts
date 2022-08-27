import { Router } from "express";
import { SignUpController } from "./controllers/user-controller/signup-controller";
import { SignInController } from "./controllers/user-controller/signin-controller";
import { ReadAllPlantsController } from "./controllers/plants-controllers/read-all-plants-controller";
import { ReadPlantController } from "./controllers/plants-controllers/read-plant-controller";
import { CreatePlantController } from "./controllers/plants-controllers/create-plant-controller";
import { UpdatePlantController } from "./controllers/plants-controllers/update-plant-controller";
import { DeletePlantController } from "./controllers/plants-controllers/delete-plant-controller";

export const routes = Router();

const signUpController = new SignUpController();
const signInController = new SignInController();

const readAllPlantController = new ReadAllPlantsController();
const readPlantController = new ReadPlantController();
const createPlantController = new CreatePlantController();
const updatePlantController = new UpdatePlantController();
const deletePlantController = new DeletePlantController();

routes.post("/signup", signUpController.handle);
routes.post("/signin", signInController.handle);

routes.get("/plants/", readAllPlantController.handle);
routes.get("/plants/:id", readPlantController.handle);
routes.post("/plants", createPlantController.handle);
routes.patch("/plants", updatePlantController.handle);
routes.delete("/plants/:id", deletePlantController.handle);