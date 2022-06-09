import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

/**
 * userLogin function
 * @param email user email
 * @param password user password
 * @returns Promise which returns user login token if fulfilled
 */
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

/**
 * getUserState function
 * @param token User token
 * @returns Promise with user data from corresponding token
 */
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

/**
 *
 * @param token userToken
 * @param firstName user new firstname
 * @param lastName user new lastname
 * @returns Promise with status code from PUT API call, if 200 changes can be made to the redux store
 */
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
