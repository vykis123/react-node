import { useNavigate } from "react-router";

type LoggedInState = {
  handleLoggedInState(value: boolean): void;
};

function Menu({ handleLoggedInState }: LoggedInState) {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("loginToken");
    handleLoggedInState(false);
    navigate("/");
  };

  return (
    <>
      <nav className="min-w-full self-baseline flex flex-1 justify-between">
        <h2 className="text-white2 font-display ">Navigation</h2>
        <div>
          <button
            className="
            py-2 
           px-4 
           border 
           border-white3
           rounded-xl 
           font-display 
           text-white1
           shadow-lg
           hover:border-white2
           hover:text-white2
           focus:border-white2
           focus:text-white2
           focus:outline-none
          "
            onClick={() => logOut()}
          >
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
}

export default Menu;
