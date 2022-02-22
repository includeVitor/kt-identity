import Router from "next/router";
import api from ".";
import { AppRoutes } from "../lib/types";
import { RegisterRequestModel } from "./types";

const registerRequest = async (model: RegisterRequestModel) => {
  try {
    await api.post("auth/register", { ...model, age: +model.age });
    console.log("success");
    Router.push(AppRoutes.login);
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
    await api.get(`auth/confirmEmail?userId=${userId}&token=${token}`);
    return "Email confirmed";
  } catch {
    return "Failed to confirm the email";
  }
};

export { registerRequest, confirmEmailRequest };
