import { Request, Response } from "express";
import { DeletePlantService } from "../../services/plants-services/delete-plant-service";

export class DeletePlantController {
  async handle(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletePlantService = new DeletePlantService();
      const response = await deletePlantService.execute(id);

      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
