import axios from "axios";
import router from "next/router";
import { AppRoutes } from "../lib/types";
import { sign_out } from "../lib/utils";

const api = axios.create({
  baseURL: "https://localhost:7100/",
});

/*
 * Middleware after Request
 */
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { response } = error;

    if (response) {
      switch (response.status) {
        //401
        case 401:
          sign_out();
          break;

        //403
        case 403:
          router.push(AppRoutes.AppForbiddenPage);
          break;

        //500
        case 500:
          alert("something bad happened try again later");
          break;
      }
    } else {
      alert("something REALLY bad happened try again later");
    }

    return Promise.reject(error);
  }
);

export default api;
