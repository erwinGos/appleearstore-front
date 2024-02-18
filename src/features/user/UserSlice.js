import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, CheckAuth, Logout, SignUp } from "./UserApi";

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await Login(credentials);
            return response;
        }
        catch (error) {
            if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
            } else {
              return rejectWithValue({ message: 'Une erreur est survenue' });
            }
        }
    }
);

export const checkAuthUser = createAsyncThunk(
    'user/checkAuth',
    async () => {
        const response = await CheckAuth();
        return response;
      }
);

export const logoutUser = createAsyncThunk(
    'user/logout',
    async () => {
        const response = await Logout();
        return response;
      }
);

export const signUpUser = createAsyncThunk(
    'user/signup',
    async (userInformations, { rejectWithValue }) => {
        try {
            const response = await SignUp(userInformations);
            return response;
        } catch (error) {
            if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
            } else {
              return rejectWithValue({ message: 'Une erreur est survenue' });
            }
        }
      }
);

const initialState = {
    isAuth: false,
    loading: false,
    user: null,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {

    // Login cases
        builder
            .addCase(loginUser.pending,(state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled,(state, action) => {
                state.loading = false;
                state.isAuth = action.payload ? true : false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected,(state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload.message;
            })

        // Sign up cases
        builder
            .addCase(signUpUser.pending,(state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled,(state, action) => {
                state.loading = false;
                state.isAuth = action.payload ? true : false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signUpUser.rejected,(state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload.message;
            })

    // Logout cases
        builder
            .addCase(logoutUser.fulfilled, (state) => {
                Object.assign(state, initialState);
            })

    // Check auth cases
        builder
            .addCase(checkAuthUser.pending, (state) => {
                state.isAuth = false;
                state.loading = true;
            })
            .addCase(checkAuthUser.fulfilled, (state, action) => {
                state.isAuth = action.payload;
                state.loading = false;
            })
            .addCase(checkAuthUser.rejected, (state, action) => {
                state.isAuth = false;
                state.loading = false;
            })
    }
});

export default userSlice.reducer;