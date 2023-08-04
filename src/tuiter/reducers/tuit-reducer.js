import { createSlice,current } from "@reduxjs/toolkit";
import tuitsArray from "./tuits.json";
import { findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk } from "../services/tuits-thunks";

const initialState = {
    tuits:[],
    loading:false
}
const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
    };

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
 name: "tuits",
 initialState,
 extraReducers: {
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
    },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
        state.loading = false
        state.tuits.push({...templateTuit,...payload})
    },
    [deleteTuitThunk.fulfilled]:
        (state, {payload}) =>{
            state.loading = false
            state.tuits = state.tuits.filter( (t) => t._id !== payload)
        },
    [findTuitsThunk.pending]:
        (state) => {
            state.loading = true
            state.tuits = [] 
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits = payload 
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
            state.loading = false
            state.error = action.error
        }
    },
 reducers:{
    
 }
});

export const{tuitLikeClick,createTuit,deleteTuit} =tuitsSlice.actions
export default tuitsSlice.reducer;