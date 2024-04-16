import { useOutletContext } from "react-router";
import Form from "../components/Form";

function Login() {
  const { setLoggedIn } = useOutletContext<{
    setLoggedIn: { setLoggedIn(value: boolean): void };
  }>();

  function handleLoggedInState(value: boolean) {
    setLoggedIn.setLoggedIn(value);
  }
  return <Form handleLoggedInState={handleLoggedInState} name="Login" />;
}

export default Login;
