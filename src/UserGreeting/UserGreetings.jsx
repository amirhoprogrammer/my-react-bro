import UserGreeting from "./UserGreeting";
import "./usergreeting.css";
function UserGreetings() {
  return (
    <>
      <UserGreeting IsLoggedIn={true} username="AmirHossein" />
      <UserGreeting IsLoggedIn={false} username="AmirHessam" />
    </>
  );
}
export default UserGreetings;
