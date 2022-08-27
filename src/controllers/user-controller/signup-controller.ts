import { Request, Response } from "express";
import { SignUpService } from "../../services/user-services/signup-service";

export class SignUpController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const signUpService = new SignUpService();
      const response = await signUpService.execute(email, password);

      return res.status(201).send(response);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
