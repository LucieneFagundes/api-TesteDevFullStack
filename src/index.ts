import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";
import admin from "firebase-admin";
import serviceAccount from "../serviceAccount.json";
import { firebaseApp } from "./firebase-app-config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
    projectId: serviceAccount.project_id,
  }),
});

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
      return response.status(400).json({
          error: err.message
      })
  }

  return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
  })
  
});


app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
