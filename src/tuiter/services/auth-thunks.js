import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";
export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
    const user = await authService.login(credentials);
    return user;
    }
);
export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = await authService.profile();
    console.log('response profile thunk')
    console.log(response)
    return response;
});

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
    await authService.updateUser(user);
    return user;
});

export const registerThunk = createAsyncThunk(
    "auth/register",async ({username,password}) =>{
        const user = await authService.register({username,password})
        return user;
    
});