import admin from "firebase-admin";

export class ReadAllPlantsService{
  async execute(){
    const allPlants = admin.firestore().collection("plants");
    const response = await allPlants.get();

    let responseArr: admin.firestore.DocumentData[] = [];

    response.forEach(doc => {
      responseArr.push(doc.data());
    });

    return responseArr;
  }
}