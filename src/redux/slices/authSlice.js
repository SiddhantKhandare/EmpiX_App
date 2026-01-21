import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { logoutApi } from "../../services/authService";

// 🔗 Backend base URL
const API_URL = "http://10.0.2.2:5000/api/auth";

/* ===========================
   LOGIN
=========================== */
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      console.log("✅ LOGIN API RESPONSE:", response.data);

      const { token, employee } = response.data.data;

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("employee", JSON.stringify(employee));

      return { token, employee };
    } catch (error) {
      console.log("❌ LOGIN ERROR:", error.response?.data || error.message);
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

/* ===========================
   AUTO LOGIN
=========================== */
export const loadUserFromStorage = createAsyncThunk(
  "auth/loadUserFromStorage",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const employee = await AsyncStorage.getItem("employee");

    if (token && employee) {
      return { token, employee: JSON.parse(employee) };
    }

    return null;
  }
);

/* ===========================
   LOGOUT (API)
=========================== */
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { getState }) => {
    const token = getState().auth.token;

    try {
      if (token) {
        await logoutApi(token);
        console.log("✅ LOGOUT API CALLED");
      }
    } catch (error) {
      console.log("❌ LOGOUT API ERROR", error?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    employee: null,
    loading: false,
    error: null,
  },
  reducers: {
    /* ===========================
       CLEAR LOCAL AUTH
    =========================== */
    clearAuth(state) {
      state.token = null;
      state.employee = null;
      state.error = null;

      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("employee");
    },
  },
  extraReducers: (builder) => {
    builder
      /* LOGIN */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.employee = action.payload.employee;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* AUTO LOGIN */
      .addCase(loadUserFromStorage.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.token;
          state.employee = action.payload.employee;
        }
      })

      /* LOGOUT */
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.employee = null;
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
