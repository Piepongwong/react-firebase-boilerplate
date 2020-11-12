import Notification from "components/Notification";
import { createContext, useState } from "react";
export const notificationsContext = createContext({
  notifications: [],
  pushNotification: () => {},
});

export default function ({ children }) {
  const [notifications, setNotifcations] = useState([]);

  function pushNotification(notification) {
    let notificationCP = [...notifications, notification];
    setNotifcations(notificationCP);
    setTimeout(() => {
      let notificationCP = [...notifications];
      notificationCP.unshift();
      setNotifcations(notificationCP);
    }, 1500);
  }

  return (
    <notificationsContext.Provider value={{ notifications, pushNotification }}>
      <div className="notification-container">
        {notifications.map((notification, index) => (
          <Notification key={index}>{notification.message}</Notification>
        ))}
      </div>
      {children}
    </notificationsContext.Provider>
  );
}
