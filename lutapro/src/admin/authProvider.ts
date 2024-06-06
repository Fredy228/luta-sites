import { get, set, remove } from "local-storage";

const apiUrl = "http://localhost:3333/api";

const authProvider = {
  login: ({ username, password }: { username: string; password: string }) => {
    const request = new Request(`${apiUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include", // Ensure cookies are included in the request
    });

    console.log("request-auth", request);
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        set("token", res.accessToken);
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkAuth: () => {
    console.log("Checking auth token");
    return get("token") ? Promise.resolve() : Promise.reject();
  },
  checkError: (error: { status: number; [key: string]: any }) => {
    console.log("Checking error", error);
    if (error?.status === 401) {
      remove("token");
      return Promise.reject(new Error("You are not authorized"));
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    console.log("Getting permissions");
    return Promise.resolve();
  },
};

export default authProvider;
