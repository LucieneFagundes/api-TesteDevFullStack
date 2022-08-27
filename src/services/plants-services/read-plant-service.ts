import admin from "firebase-admin";

export class ReadPlantService {
  async execute(id: string) {
    const plantRef = admin.firestore().collection("plants").doc(id);
    const response = await plantRef.get()

    if (!response.exists) {
      throw "Planta não encontrada";
    }

    return response.data();
  }
}
