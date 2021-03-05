import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config";

const fs = firebase.initializeApp(config).firestore();

export default fs;
