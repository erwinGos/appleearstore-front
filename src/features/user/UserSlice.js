import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, CheckAuth, GetSelfUserApi, UpdateUserApi, Logout, SignUp } from "./UserApi";

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

export const GetSelfUser = createAsyncThunk(
    'user/getSelf',
    async () => {
        const response = await GetSelfUserApi();
        return response;
    }
)

export const UpdateUser = createAsyncThunk(
    'user/UpdateUser',
    async (userForm, { rejectWithValue }) => {
        try {
            const response = await UpdateUserApi(userForm);
            return response;
        } catch (error) {
            if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
            } else {
              return rejectWithValue({ message: 'Une erreur est survenue' });
            }
        }
    }
)

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

export const setError = createAsyncThunk(
    'user/seterror',
    (error) => {
        return error;
    } 
)

const initialState = {
    isAuth: null,
    loading: false,
    user: null,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {

    // Set error
    builder
        .addCase(setError.fulfilled, (state, action) => {
            state.error = action.payload
        })
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

        
    // Update User
    builder
        .addCase(UpdateUser.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(UpdateUser.fulfilled,(state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(UpdateUser.rejected,(state, action) => {
            console.log(action)
            console.log(state)
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

    // Get current user
    builder
        .addCase(GetSelfUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(GetSelfUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(GetSelfUser.rejected, (state, action) => {
            state.isAuth = false;
            state.loading = false;
        })
    }
});

export default userSlice.reducer;