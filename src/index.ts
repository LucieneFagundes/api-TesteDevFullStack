import express from "express";
import cors from "cors";
import { routes } from "./routes";
import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import "dotenv/config";
import "dotenv-json";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const firebaseApp = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: process.env.SA_PRIVATE_KEY,
    clientEmail: process.env.SA_CLIENT_EMAIL,
    projectId: process.env.SA_PROJECT_ID,
  }),
});

app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
