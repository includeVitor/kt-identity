import Router from "next/router";
import api from ".";
import { AppRoutes } from "../lib/types";
import { sign_in } from "../lib/utils";
import { LoginRequestModel, RegisterRequestModel } from "./types";

const registerRequest = async (model: RegisterRequestModel) => {
  try {
    await api.post("auth/register", { ...model, age: +model.age });
    console.log("success");
    Router.push(AppRoutes.HomePage);
  } catch (error: any) {
    const { response } = error;

    console.log(response);
  }
};

const confirmEmailRequest = async (
  userId: string,
  token: string
): Promise<string> => {
  try {
    await api.post("auth/confirmEmail", { userId, token });
    return "Email confirmed";
  } catch {
    return "Failed to confirm the email";
  }
};

const loginRequest = async (model: LoginRequestModel) => {
  try {
    const response = await api.post("auth/login", model);

    const { access_token } = response.data;

    sign_in(access_token);

    Router.push(`protected/${AppRoutes.AppHomePage}`);
  } catch (error: any) {
    const { response } = error;

    console.log(response);
  }
};

const logoutRequest = async () => {
  try {
    await api.post("auth/logout");

    Router.push(AppRoutes.HomePage);
  } catch (error: any) {
    const { response } = error;

    console.log(response);
  }
};

export { registerRequest, confirmEmailRequest, loginRequest, logoutRequest };
