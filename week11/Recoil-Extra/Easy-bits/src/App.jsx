import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"

function App() {
  return <div>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </div>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const NotificationsCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return <div>
    <button>Home</button>

    <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount})</button>
    <button>Messaging ({messagingNotificationCount >= 100 ? "99+" : messagingNotificationCount})</button>
    <button>Notifications ({NotificationsCount >= 100 ? "99+" : NotificationsCount})</button>
    <button>Me ({totalNotificationCount})</button>
  </div>
}


export default App
