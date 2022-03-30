import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlOilRZIjb8cLYquh5iy9pzPCKUH0-NEs",
  authDomain: "materpel-2003.firebaseapp.com",
  projectId: "materpel-2003",
  storageBucket: "materpel-2003.appspot.com",
  messagingSenderId: "165856846413",
  appId: "1:165856846413:web:87b7c1a87b8d3cfd52b204",
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}