function UserGreeting(props) {
  const welcomeMessage = <h2 className="welcome-message">welcome {props.username}</h2>;
  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;
  /*if (props.IsLoggedIn) {
    return <h2>welcome {props.username}</h2>;
  }  else {
    return <h2>Please log in to continue</h2>;
  }*/
  /*return <h2>Please log in to continue</h2>;*/
  /*return props.IsLoggedIn ? (
    <h2 className="welcome-message">welcome {props.username}</h2>
  ) : (
    <h2 className="login-prompt">Please log in to continue</h2>
  );*/
  return props.IsLoggedIn ? welcomeMessage : loginPrompt;
}
export default UserGreeting;
