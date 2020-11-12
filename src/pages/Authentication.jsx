import { useContext} from "react";
import { firebaseContext } from "contexts/FirebaseProvider";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import DefaultLayout from "layouts/Default";
import { useHistory } from "react-router-dom";

export default function Authentication(props) {
  let { firebase, user } = useContext(firebaseContext);
  let history = useHistory();
  if (user) history.push("/");
  let uiConfig = {};
  if (firebase) {
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      },
    };
  }
  return (
    <DefaultLayout>
      <div className="h-100 d-flex align-items-center justify-content-center">
        {!!firebase.apps.length && (
          <StyledFirebaseAuth
            className="w-100"
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    </DefaultLayout>
  );
}
