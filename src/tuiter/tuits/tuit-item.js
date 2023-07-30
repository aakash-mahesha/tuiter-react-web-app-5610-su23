import "./index.css"
import React from "react";
import TuitStats from "./tuit-stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { deleteTuit } from "../reducers/tuit-reducer";
import { useDispatch } from "react-redux";


    const TuitItem = ({
        tuit = {
            "_id": 123, 
        "topic": "Space", 
        "userName": "SpaceX",
        "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h", 
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"   
        }
    }
) =>{
    
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row w-100 mt-2 ps-2 pt-2">
                <div className="col-2 text-center ps-0 align-items-start">
                    <img className="img rounded-circle" height={50} width ={50} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10 pe-2 ps-0 ms-0">
                    <div>
                    <i className=""
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span><b>{tuit.userName}</b> </span>
                        <span><FontAwesomeIcon icon={faCheckCircle} style={{color: "#1c6efd",}} /> </span>
                        <span>{tuit.handle} . </span>
                        <span>{tuit.time} </span>
                    </div>
                    {tuit.tuit}
                    <div>
                        <TuitStats tuitId = {tuit._id} likes = {tuit.likes} liked = {tuit.liked} replies = {tuit.replies}  retuits={tuit.retuits}/>
                    </div>
                </div>
                
            </div>
        </li>
    );
}
export default TuitItem