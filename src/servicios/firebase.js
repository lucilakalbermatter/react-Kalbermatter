import { data } from "../Data/data";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAPc7a3g9K84oQSybpmaUhiFzuiAxMtiCY",
    authDomain: "react-kalbermatter.firebaseapp.com",
    projectId: "react-kalbermatter",
    storageBucket: "react-kalbermatter.appspot.com",
    messagingSenderId: "81502929939",
    appId: "1:81502929939:web:06b0f96da523a37e5c2be6",
    measurementId: "G-YZTN3T3LT6"
  };

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function exportItemsToFirestore() {
  
    const colectionRef = collection(DB, "productos");
  
    for (let item of data) {  
      let newItem = await addDoc(colectionRef, item);
    }
}


export async function obtenerUnicoItem(id) {

    let docReferencia = doc(DB, "productos", id);
  
    let docFoto = await getDoc(docReferencia);
  
    let item = docFoto.data();
    item.id = docFoto.id;
  
    return item;
}

export async function obtenerProductos() {
    let coleccionRef = collection(DB, "productos");
    let docsFoto = await getDocs(coleccionRef);
  
    let docsArray = docsFoto.docs;
    
    let dataDocs = docsArray.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  
    return dataDocs;
  }

  export async function obtenerCategoria(categoryID) {
    let coleccionRef = collection(DB, "productos");
  
    let q = query(coleccionRef, where("categoria", "==", categoryID));
  
    let docsFoto = await getDocs(q);
    let docsArray = docsFoto.docs;
  
    let dataDocs = docsArray.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  
    return dataDocs;
  }

  export async function crearOrdenDeCompra(order) {
    const coleccionRef = collection(DB, "orders");
  
    let newOrder = await addDoc(coleccionRef, order);
    return newOrder.id;
  }