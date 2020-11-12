import { createContext, useEffect, useState } from "react";
import Firebase from "firebase";
export const firebaseContext = createContext({ app: null, user: null });
export default function FirebaseProvider(props) {
  const [firebase, setFireBase] = useState(Firebase);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (firebase.apps && !firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "1:892426657062:web:9e4713f1526a632db435e7",
        measurementId: "G-KMRYJ6K650",
      });
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
      setFireBase(firebase);
    }
  }, []);
  return (
    <firebaseContext.Provider value={{ firebase, user }}>
      {props.children}
    </firebaseContext.Provider>
  );
}
