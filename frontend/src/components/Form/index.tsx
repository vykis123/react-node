import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
// import { loginReducer } from "../Form/formReducer";
import { FormValidationEnum } from "../Form/formReducer";
import { formReducer } from "./formReducer";

type Props = {
  name: string;
  handleLoggedInState?: (value: boolean) => void;
};

export const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
};

function Form({ name, handleLoggedInState }: Props) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  let { username, password, usernameError, passwordError } = state;

  const validateUsername = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    dispatch({
      type:
        name === "Login"
          ? FormValidationEnum.USERNAME_CHECK
          : FormValidationEnum.REGISTER_USERNAME_CHECK,
      payload: e.target.value,
    });
  };

  const validatePassword = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    dispatch({
      type:
        name === "Login"
          ? FormValidationEnum.PASSWORD_CKECK
          : FormValidationEnum.REGISTER_PASSWORD_CHECK,
      payload: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (usernameError || passwordError) return;

    const path = name === "Login" ? "login" : "register";

    const responseData = await useFetch(path, username, password);
    setData(responseData);

    if (responseData.accessToken) {
      useLocalStorage("set", responseData.accessToken);
      handleLoggedInState(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    if (data?.message.includes("created!")) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [data]);

  return (
    <form action="#" onSubmit={onSubmit} className=" p-4 w-1/3">
      <h1 className="font-display font-medium text-center mb-4 text-xl text-white2">
        {name}
      </h1>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="font-display text-sm block text-white1"
        >
          Username
        </label>
        <input
          onBlur={(e) => validateUsername(e)}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          className="
      font-display 
      bg-transparent 
      text-white2 
      px-2 py-1 
      border-b 
      border-white3
      w-full 
      placeholder-current
      focus:outline-none 
      focus:border-white2 
      focus:border-b-2"
        />
        {usernameError.length > 0 && (
          <p className=" font-display my-2 text-error text-xs animate-[appear_0.5s_ease-in-out_forwards]">
            {usernameError}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="font-display text-sm block text-white1"
        >
          Password
        </label>
        <input
          onBlur={(e) => validatePassword(e)}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          className="
      font-display 
      bg-transparent 
      text-white2 
      px-2 py-1 
      border-b 
      border-white3
      w-full 
      placeholder-current
      focus:outline-none 
      focus:border-white2 
      focus:border-b-2"
        />
        {passwordError.length > 0 && (
          <p className=" font-display my-2 text-error text-xs animate-[appear_0.5s_ease-in-out_forwards]">
            {passwordError}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="
    block 
    mx-auto 
    w-1/2 
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
      >
        Login
      </button>
      {data?.message && (
        <p
          className=" 
  font-display  
  my-2 text-error 
  text-xs 
  animate-[appear_0.5s_ease-in-out_forwards]"
        >
          {data?.message}
        </p>
      )}
      <Link
        to={name === "Login" ? "/register" : "/"}
        className="
    font-display 
    text-l 
    text-white1 
    hover:text-white2 
    focus:text-white2 
    focus:outline-none 
    focus:border-b 
    focus:border-white3"
      >
        {name === "Login" ? "Register" : "Login"}
      </Link>
    </form>
  );
}

export default Form;
