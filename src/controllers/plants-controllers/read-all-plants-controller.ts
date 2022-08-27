import { Request, Response } from "express";
import { ReadAllPlantsService } from "../../services/plants-services/read-all-plants-service";

export class ReadAllPlantsController {
  async handle(req: Request, res: Response) {
    try{
      
      const readAllPlantsService = new ReadAllPlantsService();

      const response = await readAllPlantsService.execute();

      return res.status(200).json(response);

    }catch(err){
      res.status(404).json(err);
    }
  }
}
