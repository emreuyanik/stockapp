import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılı.");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarısız oldu.");
      console.log(error);
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart());
    try {
      // Make a POST request to the registration endpoint
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register/`,
        userData
      );
      // Dispatch any actions you need for successful registration
      // For example, you might dispatch a registration success action
      // and then redirect the user to the login page
      // dispatch(registerSuccess(data));
      toastSuccessNotify("Kayıt işlemi başarılı. Lütfen giriş yapın.");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Kayıt işlemi başarısız oldu.");
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      // Make a request to the logout endpoint, if applicable
      // For example, if you have a server-side logout endpoint
      // const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout/`);
      // Handle any actions or state updates for successful logout
      // dispatch(logoutSuccess());
      toastSuccessNotify("Çıkış işlemi başarılı.");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Çıkış işlemi başarısız oldu.");
      console.log(error);
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
