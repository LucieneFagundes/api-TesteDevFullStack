import { Request, Response } from "express";
import { UpdatePlantService } from "../../services/plants-services/update-plant-service";

export class UpdatePlantController {
  async handle(req: Request, res: Response) {
    try {
      const { id, name, species, notes } = req.body;
      const updatePlantService = new UpdatePlantService();

      const response = await updatePlantService.execute({
        id,
        name,
        species,
        notes,
      });

      return res.status(201).json(response);
    } catch (e) {
      res.status(400).json(e);
    }
  }
}
