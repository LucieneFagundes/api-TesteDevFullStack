import { Request, Response } from "express";
import { ReadPlantService } from "../../services/plants-services/read-plant-service";

export class ReadPlantController{
  async handle(req: Request, res: Response){

    try{
      const readPlantService = new ReadPlantService();
      const id = req.params.id;
      const response = await readPlantService.execute(id);

      return res.status(200).json(response);

    } catch(err){
      return res.status(404).json(err);
    }
  }
}