import { useSelector } from "react-redux"
import TuitItem from "./tuit-item"
import React from "react"

const TuitList = ()=>{
    const tuitsArray = useSelector((state) => state.tuits);
    
    return(
        
        <ul className="list-group">
            {
            tuitsArray.map(tuit =>
            <TuitItem
            key={tuit._id} tuit={tuit}/> )
            }
        </ul>
        
    )
}
export default TuitList