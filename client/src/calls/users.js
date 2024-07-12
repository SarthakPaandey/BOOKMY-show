import axios from "axios";

const { axiosInstance } = require("./index");
export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/register", value);
    console.log("response");
    return response.data;
  } catch (error) {
    return error;
  }
};
export const LoginUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/login", value);
    return response.data;
  } catch (error) {
    return error;
  }
};
