import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

export const userLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/user/login`, {
      email: email,
      password: password,
    });
    const token = await response.data.body.token;
    if (token) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserState = async (token: string) => {
  try {
    const response = await axios(`${baseURL}/user/profile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data.body;
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserState = async (
  token: string,
  firstName: string,
  lastName: string
) => {
  try {
    const response = await axios(`${baseURL}/user/profile`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({ firstName, lastName }),
    });
    const status = await response.status;
    if (status === 200) {
      return status;
    }
  } catch (error) {
    console.log(error);
  }
};
