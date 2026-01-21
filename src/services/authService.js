import axios from "axios";

const API_BASE = "http://10.0.2.2:5000/api/auth";

export const logoutApi = async (token) => {
  const response = await axios.post(
    `${API_BASE}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
