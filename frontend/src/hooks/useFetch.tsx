async function useFetch(path: string, username: string, password: string) {
  const body = {
    username,
    password,
  };
  try {
    const response = await fetch(`http://localhost:3500/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Something went wrong ${error}`);
  }
}

export default useFetch;
