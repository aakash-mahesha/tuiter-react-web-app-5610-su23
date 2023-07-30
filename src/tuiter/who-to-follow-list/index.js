import React from "react";
// import whoArray from './who.json';
import { UseSelector } from "react-redux/es/hooks/useSelector";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";
const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    console.log(whoArray)
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who =>
                <WhoToFollowListItem
                    key={who._id}
                    who={who}/>
                    )
            }
        </ul>
        // <h1>Who To Follow!!</h1>
    );
};
export default WhoToFollowList;