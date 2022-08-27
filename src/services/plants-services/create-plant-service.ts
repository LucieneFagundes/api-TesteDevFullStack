import admin from "firebase-admin";
import { v4 as uuid} from "uuid";

interface ICreatePlant {
  name: string;
  species: string;
  notes: string;
}

export class CreatePlantService {

  async execute({ name, species, notes }: ICreatePlant) {
    
    const id = uuid();

    const response = await admin.firestore().collection("plants").doc(id).set({
      id,
      name,
      species,
      notes,
    });

    return response;
  }
}
