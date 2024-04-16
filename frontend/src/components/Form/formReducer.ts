export const enum FormValidationEnum {
  USERNAME_CHECK = "USERNAME_CHECK",
  PASSWORD_CKECK = "PASSWORD_CKECK",
  REGISTER_USERNAME_CHECK = "REGISTER_USERNAME_CHECK",
  REGISTER_PASSWORD_CHECK = "REGISTER_PASSWORD_CHECK",
}

// An interface for our actions
interface FormAction {
  type: FormValidationEnum;
  payload: string;
}

// An interface for our state
interface FormState {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
}

export function formReducer(state: FormState, action: FormAction) {
  const { type, payload } = action;

  switch (type) {
    case FormValidationEnum.USERNAME_CHECK:
      if (payload === "") {
        return {
          ...state,
          username: "",
          usernameError: "Username should not be empty",
        };
      }
      state.username = payload;
      state.usernameError = "";
      return {
        ...state,
      };
    case FormValidationEnum.PASSWORD_CKECK:
      if (payload === "") {
        return {
          ...state,
          password: "",

          passwordError: "Password should not be empty",
        };
      }
      state.password = payload;
      state.passwordError = "";
      return {
        ...state,
      };
    case FormValidationEnum.REGISTER_USERNAME_CHECK:
      if (payload === "") {
        return {
          ...state,
          username: "",
          usernameError: "Username should not be empty",
        };
      }
      if (payload.trim().length < 4) {
        return {
          ...state,
          username: "",
          usernameError: "Username should be atleast 4 letters long.",
        };
      }
      state.username = payload;
      state.usernameError = "";
      return {
        ...state,
      };
    case FormValidationEnum.REGISTER_PASSWORD_CHECK:
      if (payload === "") {
        return {
          ...state,
          password: "",

          passwordError: "Password should not be empty",
        };
      }
      if (payload.trim().length < 7) {
        return {
          ...state,
          password: "",

          passwordError: "Password should be atleast 7 characters long.",
        };
      }
      state.password = payload;
      state.passwordError = "";
      return {
        ...state,
      };
    default:
      return state;
  }
}
