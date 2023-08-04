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
          <div className="row">
            <div className="col-2">
              <div className="wd-stat align-items-center"> 
                <button className="btn wd-replies-btn">
                  <div className="row">
                      <div className="col-6">
                      <span className="stat-icon-and-value"><FontAwesomeIcon icon={faComment}/></span>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ps-1">
                      <span>{tuit.replies}</span>
                      </div>  
                  </div>  
                </button>
              </div> 
           </div>
           <div className="col-2">
            < div className="wd-stat align-items-center">
                <button className="btn wd-retweet-btn">
                  <div className="row">
                    <div className="col-6">
                      <span className="stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> </span>                    
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ps-1">
                      <span>{tuit.retuits}</span>
                    </div>
                  </div>
                </button>
              </div>
           </div>
           <div className="col-2">
            <div className="wd-stat align-items-center">
              <button className="btn wd-likes-btn " onClick={handleClickLike}>
                <div className="row">
                  <div className="col-6">
                    <span className="wd-stat-icon-and-value">
                      {tuit.liked ? (
                        <FontAwesomeIcon icon={faHeartSolid} className="liked" ></FontAwesomeIcon>
                      ): (
                        <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
                      )}</span>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ps-1">
                      <span>{tuit.likes}</span>
                    </div>  
                </div>
              </button> 
            </div>
           </div>
           <div className="col-2">
              <div className="wd-stat align-items-center">
                <button className="btn wd-dislike-btn" onClick={handleClickDislike}>
                  <div className="row">
                      <div className="col-6">
                        <span className="stat-icon-and-value"><FontAwesomeIcon icon={faThumbsDown}/></span>                    
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ps-1">
                        <span>{tuit.dislikes}</span>
                      </div>
                  </div>
                </button>
              </div>
           </div>
           <div className="col-2">
              <div className="wd-stat align-items-center">
                <button className="btn wd-upload-btn">
                  <div className="row">
                    <div className="col-12 ps-1">
                      <span className="stat-icon-and-value"><FontAwesomeIcon icon={faUpload}/></span>                    
                    </div>
                  </div>
                </button>     
              </div>
           </div>
          </div>
        );

}
export default TuitStats