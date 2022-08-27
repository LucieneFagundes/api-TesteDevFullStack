import admin from "firebase-admin";

interface IUpdatePlant {
  id: string;
  name?: string;
  species?: string;
  notes?: string;
}

export class UpdatePlantService {
  async execute({ id, name, species, notes }: IUpdatePlant) {
    const plantRef = admin.firestore().collection("plants");

    const plantExist = await plantRef.doc(id).get();

    if (!plantExist.exists) {
      throw "Planta não encontrada";
    }

    const response = plantRef.doc(id)
      .update({
        name,
        species,
        notes,
      });

    return response;
  }
}
