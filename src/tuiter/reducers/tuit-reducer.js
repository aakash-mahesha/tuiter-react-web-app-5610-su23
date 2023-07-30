import { createSlice,current } from "@reduxjs/toolkit";
import tuitsArray from "./tuits.json";

const currentUser = {
    "userName": "NASA",
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
 initialState: {tuits:tuitsArray},
 reducers:{
    tuitLikeClick(state,action){
        let exstTuit = state.tuits.find((tuit) => tuit._id ===action.payload)
        console.log(current(exstTuit))
        if(exstTuit.liked){
            exstTuit.likes -= 1
        }
        else{
            exstTuit.likes += 1
        }
        exstTuit.liked = !exstTuit.liked
       
        console.log(current(exstTuit))

        
    },
    createTuit(state, action) {
        state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
        })
    },

    deleteTuit(state, action) {
        const index = state.tuits
        .findIndex(tuit =>
        tuit._id === action.payload);
        state.tuits.splice(index, 1);
    },
 }
});

export const{tuitLikeClick,createTuit,deleteTuit} =tuitsSlice.actions
export default tuitsSlice.reducer;