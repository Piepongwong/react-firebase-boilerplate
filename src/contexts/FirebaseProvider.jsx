import { createContext, useEffect, useState } from "react";
import Firebase from "firebase";
import firebaseConfig from "settings/firebase";

export const firebaseContext = createContext({ app: null, user: null });
export default function FirebaseProvider(props) {
  const [firebase, setFireBase] = useState(Firebase);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (firebase.apps && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
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
