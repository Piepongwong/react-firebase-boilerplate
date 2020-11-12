import Default from "layouts/Default";
import useNotification from "hooks/useNotification";
import Notification from "components/Notification";
export default function Home(props) {
  const { pushNotification } = useNotification();
  return (
    <Default>
      <h1>Hi there!</h1>
      <button
        className="btn"
        onClick={() => {
          pushNotification({ message: "test" });
        }}
      >
        Teeest
      </button>
    </Default>
  );
}
