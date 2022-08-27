import { Request, Response } from "express";
import { CreatePlantService } from "../../services/plants-services/create-plant-service";

export class CreatePlantController {
  async handle(req: Request, res: Response) {
    try {
      const { name, species, notes } = req.body;
      const createPlantService = new CreatePlantService();

      const response = await createPlantService.execute({ name, species, notes });

      res.status(201).send(response)
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
