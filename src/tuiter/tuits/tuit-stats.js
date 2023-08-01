import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment,faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faUpload, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {tuitLikeClick} from '../reducers/tuit-reducer'
import './index.css'
const TuitStats = ( {tuitId, likes, liked, replies, retuits}
    
) => {
  const dispatch = useDispatch();

  const handleClickLike = () =>{
    dispatch(tuitLikeClick(tuitId))
  }
  return(
      
          <div className="wd-tuiter-stats d-flex justify-content-evenly rounded">
            <div className="wd-stat d-flex align-items-center">
              <button className="btn wd-replies-btn"><span className="stat-icon-and-value"><FontAwesomeIcon icon={faComment}/> {replies}</span></button>
            </div>
            <div className="wd-stat d-flex align-items-center">
              <button className="btn wd-retweet-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {retuits}</span></button>
            </div>
            <div className="wd-stat d-flex align-items-center">
              <button className="btn wd-likes-btn " onClick={handleClickLike}><span className="wd-stat-icon-and-value">
              {liked ? (
                <FontAwesomeIcon icon={faHeartSolid} className="liked" ></FontAwesomeIcon>
              ): (
                <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
              )} {likes}</span></button>
              
            </div>
            <div className="wd-stat d-flex align-items-center">
              <button className="btn wd-download-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon = {faUpload} /></span></button>
            </div>
          </div>
        );

}
export default TuitStats