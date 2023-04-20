import { createSlice, configureStore } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const isIn = !!Cookies.get("token") && !!Cookies.get("id");
 
 





let intialdata = {
  loggedin: isIn,
};

const login = createSlice({
  name: "login",
  initialState: intialdata,
  reducers: {
    login(state) {
      state.loggedin = true

      },
      logout(state) {
        state.loggedin = false
        
          Cookies.remove('token')
          Cookies.remove('id')
 
      }
  },
});

const loginFun = configureStore({
  // reducer: { login: login.reducer  },
  reducer : login.reducer
});

export const inActions = login.actions;

export default loginFun;
