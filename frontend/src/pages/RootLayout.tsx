import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Menu from "../components/Menu";
import useLocalStorage from "../hooks/useLocalStorage";

function RootLayout() {
  const [logedIn, setLoggedIn] = useState(false);

  function handleLoggedInState(value: boolean) {
    setLoggedIn(value);
  }

  useEffect(() => {
    const token = useLocalStorage("get");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <main className="bg-gradient-to-r from-dark1 to-dark2 min-h-screen p-6 grid gap-1 place-items-center">
      {logedIn && <Menu handleLoggedInState={handleLoggedInState} />}
      <Outlet context={{ setLoggedIn }} />
    </main>
  );
}
export default RootLayout;
