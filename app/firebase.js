
import { initializeApp } from "firebase/app";

import {getStorage, ref ,uploadBytesResumable, getDownloadURL,listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJYbOojuAgdVS7U6kO60szA9CaMChgQSw",
  authDomain: "uploadfile-3f961.firebaseapp.com",
  projectId: "uploadfile-3f961",
  storageBucket: "uploadfile-3f961.appspot.com",
  messagingSenderId: "1049114326355",
  appId: "1:1049114326355:web:710707cbd473f6fc981da6",
  measurementId: "G-35XVYRP7J9"
};


const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {getStorage, ref , storage ,uploadBytesResumable, getDownloadURL ,listAll}
