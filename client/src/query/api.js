import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
    accept: "*/*",
  },
});

const getToken = () => {
  const serializedState = localStorage.getItem("Karol-Bak");
  if (serializedState === null) {
    return "";
  } else {
    const stateData = JSON.parse(serializedState);
    if (stateData.user !== undefined) {
      return stateData.user.token;
    } else {
      return "";
    }
  }
};

const token = getToken();
console.log("token", token);

apiClient.interceptors.request.use(
  async (config) => {
    if (token) {
      console.log("token", token);
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default apiClient;
