const useLocalStorage = (method: string, token?: string) => {
  if (method === "set") {
    const date = new Date();
    const localStorageObject = {
      token,
      date,
    };
    localStorage.setItem("loginToken", JSON.stringify(localStorageObject));
    return;
  }

  const fetchedToken = localStorage.getItem("loginToken") || "";
  if (!fetchedToken) return fetchedToken;

  const parsedResult = JSON.parse(fetchedToken);

  if (+new Date() - +new Date(parsedResult.date) < 5 * 60 * 1000) {
    return parsedResult.token;
  } else {
    localStorage.removeItem("loginToken");
    return "";
  }
};

export default useLocalStorage;
