// 🔥 Tu configuración personalizada de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeX7pGjjoD-6g97mnwhTgj5NP5aqFu47U",
  authDomain: "amerike-6cyber2.firebaseapp.com",
  databaseURL: "https://amerike-6cyber2-default-rtdb.firebaseio.com",
  projectId: "amerike-6cyber2",
  storageBucket: "amerike-6cyber2.firebasestorage.app",
  messagingSenderId: "668563436933",
  appId: "1:668563436933:web:62a83286c1e5c3153980ec",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
