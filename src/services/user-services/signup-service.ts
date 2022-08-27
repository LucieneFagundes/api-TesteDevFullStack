import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class SignUpService {
  async execute(email: string, password: string) {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      if (error.code === "auth/invalid-email") {
        throw "E-mail inválido";
      }
      if (error.code === "auth/email-already-in-use") {
        throw "E-mail já cadastrado.";
      }
      if (error.code === "auth/weak-password") {
        throw "Senha muito curta";
      }

      throw "Desculpe. Erro interno!";
    }
  }
}
