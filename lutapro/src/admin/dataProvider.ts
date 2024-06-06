import { CreateParams, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { get, set, remove } from "local-storage";

const apiUrl = "http://localhost:3333/api";

const httpClient = async (url: string, options: Record<string, any> = {}) => {
  console.log("Fetching data from server...");
  console.log("options", options);

  const token = get("token");
  if (token) {
    options.user = {
      authenticated: true,
      token: `Bearer ${token}`,
    };
  }

  try {
    const response = await fetchUtils.fetchJson(url, options);
    console.log("response", response);
    return response;
  } catch (e: any) {
    console.log(e.body);
    if (e.status && e.status === 401) {
      console.log("refreshing token from server...");

      const refreshResponse = await fetch(`${apiUrl}/auth/refresh`, {
        method: "GET",
        credentials: "include",
      });

      if (refreshResponse.ok) {
        const { accessToken } = await refreshResponse.json();
        console.log("accessToken", accessToken);
        set("token", accessToken);
        options.user = {
          authenticated: true,
          token: `Bearer ${accessToken}`,
        };

        const response = await fetchUtils.fetchJson(url, options);
        return response;
      } else {
        remove("token");
        window.location.href = "/admin#/login";
        return Promise.reject(e);
      }
    } else if (e.status && e.status === 400) {
      return Promise.reject("Проверьте правильность данных");
    }
    return Promise.reject("Неизвестная ошибка");
  }
};

const dataProvider = simpleRestProvider(apiUrl, httpClient, "Content-Range");

const customProvider = {
  ...dataProvider,
  create: (resource: string, params: CreateParams<any>) => {
    console.log("params", params);
    if (params.data.hasOwnProperty("file")) {
      console.log("params.data.file", params.data.file);
      if (!params.data.file) return Promise.reject("Вы не загрузили картинку");
      const { file, ...other } = params.data;
      const dataForm = new FormData();

      dataForm.append("file", file.rawFile);
      Object.keys(other).forEach((key) => {
        dataForm.append(key, other[key]);
      });

      params.data = dataForm;
    }

    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: params.data,
    }).then(({ json }) => ({ data: json }));
  },
};

export default customProvider;
