import { useContext } from "react";
import { notificationsContext } from "contexts/NotificationsProvider";

export default () => {
  const {pushNotification} = useContext(notificationsContext);
  return {pushNotification};
};
