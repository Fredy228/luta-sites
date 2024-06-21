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
    return fetch(request)
      .then((response) => {
        console.log("response", response);
        if (response.status < 200 || response.status >= 300) {
          if (response.status === 401)
            throw new Error("Имя пользователя или пароль неверный.");
          if (response.status === 423)
            throw new Error("Пользователь заблокирован.");
          if (response.status === 425)
            throw new Error("Слишком много попыток. Попробуйте позже.");
          throw new Error("Неизвестная ошибка.");
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
    return get("token") ? Promise.resolve() : Promise.reject();
  },
  checkError: (error: { status: number; [key: string]: any }) => {
    console.log("Checking error", error);
    if (error?.status === 401) {
      remove("token");
      return Promise.reject("Вы не авторизованы");
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    console.log("Getting permissions");
    return Promise.resolve();
  },
};

export default authProvider;
