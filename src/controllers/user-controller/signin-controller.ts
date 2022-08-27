import { Request, Response } from "express";
import { SignInServices } from "../../services/user-services/signin-services";

export class SignInController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const signInService = new SignInServices();

      const response = await signInService.execute(email, password);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
