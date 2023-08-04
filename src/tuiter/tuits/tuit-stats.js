import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment,faHeart as faHeartOutline, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faUpload, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {tuitLikeClick} from '../reducers/tuit-reducer'
import { updateTuitThunk } from "../services/tuits-thunks";
import './index.css'
// const TuitStats = ( {tuitId, likes, liked, replies, retuits}
const TuitStats = ({tuit}
    
) => {
  const dispatch = useDispatch();

  const handleClickLike = () =>{
    // dispatch(tuitLikeClick(tuitId))
    dispatch(updateTuitThunk({...tuit, likes:tuit.likes+1}))
  }

  const handleClickDislike = () =>{
    if (!("dislikes" in tuit)){
      tuit = {...tuit, dislikes:0}
    }
    dispatch(updateTuitThunk({...tuit, dislikes:tuit.dislikes+1}))
  }
  return(
      
          // <div className="wd-tuiter-stats d-flex justify-content-evenly rounded">
          //   <div className="wd-stat d-flex align-items-center">
          //     <button className="btn wd-replies-btn"><span className="stat-icon-and-value"><FontAwesomeIcon icon={faComment}/> {tuit.replies}</span></button>
          //   </div>
          //   <div className="wd-stat d-flex align-items-center">
          //     <button className="btn wd-retweet-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {tuit.retuits}</span></button>
          //   </div>
          //   <div className="wd-stat d-flex align-items-center">
          //     <button className="btn wd-likes-btn " onClick={handleClickLike}><span className="wd-stat-icon-and-value">
          //     {tuit.liked ? (
          //       <FontAwesomeIcon icon={faHeartSolid} className="liked" ></FontAwesomeIcon>
          //     ): (
          //       <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
          //     )} {tuit.likes}</span></button> 
          //   </div>
          //   <div className="wd-stat d-flex align-items-center">
          //     <button className="btn wd-dislike-btn" onClick={handleClickDislike}><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> {tuit.dislikes}</span></button>
          //   </div> 
          //   <div className="wd-stat d-flex align-items-center">
          //     <button className="btn wd-download-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon = {faUpload} /></span></button>
          //   </div>
          // </div>
          <div className="row">
            <div className="col">
              <div className="wd-stat align-items-center">
                <button className="btn wd-replies-btn"><span className="stat-icon-and-value"><FontAwesomeIcon icon={faComment}/> {tuit.replies}</span></button>
              </div> 
           </div>
           <div className="col">
            < div className="wd-stat align-items-center">
                <button className="btn wd-retweet-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {tuit.retuits}</span></button>
              </div>
           </div>
           <div className="col">
            <div className="wd-stat align-items-center">
              <button className="btn wd-likes-btn " onClick={handleClickLike}><span className="wd-stat-icon-and-value">
                {tuit.liked ? (
                  <FontAwesomeIcon icon={faHeartSolid} className="liked" ></FontAwesomeIcon>
                ): (
                  <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
                )} {tuit.likes}</span></button> 
            </div>
           </div>
           <div className="col">
              <div className="wd-stat align-items-center">
                <button className="btn wd-dislike-btn" onClick={handleClickDislike}><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> {tuit.dislikes}</span></button>
              </div>
           </div>
           <div className="col">
              <div className="wd-stat align-items-center">
                <button className="btn wd-download-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon = {faUpload} /></span></button>
              </div>
           </div>
          </div>
        );

}
export default TuitStats