import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class SignInServices {
  async execute(email: string, password: string) {
    try {
      const auth = getAuth();
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      if (error.code === "auth/invalid-email") {
        throw "E-mail inválido";
      }
      if (error.code === "auth/user-not-found") {
        throw "E-mail e/ou senha inválido";
      }
      if (error.code === "auth/wrong-password") {
        throw "E-mail e/ou senha inválido";
      }
      throw "Desculpe. Erro interno!";
    }
  }
}
