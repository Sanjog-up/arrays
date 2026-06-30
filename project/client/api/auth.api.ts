import axios from "axios";
import { TLoginInput } from "@/types/auth.types";

// login
export const login = async (data: TLoginInput) => {
  try {
    console.log("logib");
    const response = await axios.post(
      "http://localhost:3001/api/v1/auth/login",
      data,
    );
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};
