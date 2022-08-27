import admin from "firebase-admin";

export class DeletePlantService{
  async execute(id:string){
    const plantRef = admin.firestore().collection("plants");

    const response = await plantRef.doc(id).delete();
    return response;
  }
}