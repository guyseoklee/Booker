import axios from "axios";

const refreshTokenFunc = async (navigate) => {
  const refreshToken = localStorage.getItem("refreshtoken");
  try {
    const response = await axios.post("/auth/refresh/token", {
      refreshToken: refreshToken,
    });
    localStorage.setItem("accesstoken", response.data.accessToken);
    console.log(localStorage.getItem("accesstoken"));
  } catch (error) {
    if (error.response && error.response.data.code === "INVALID_RefreshToken") {
      window.alert(error.response.data.message);
      navigate("/login");
    }
  }
  return localStorage.getItem("accesstoken");
};

export default refreshTokenFunc;
