import React from "react";
import { Link, useLocation } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state) => state.user);
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];

    const iconMap = {
        home: faHome,
        explore: faHashtag,
        notifications: faBell,
        messages: faEnvelope,
        bookmarks: faBookmark,
        lists: faListAlt,
        profile: faUser,
        more: faEllipsisH,
    };
    return (
        <div className="list-group">
            {links.map((link) =>
                <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2"><FontAwesomeIcon icon={iconMap[link]} className="me-3" /> </div>
                        <div className="col-10">{link}</div>
                    </div>
                </Link>
            )}
            {!currentUser && <Link className="list-group" to="/tuiter/login"> Login </Link>}
            {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
            { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
        </div>
    );
};
export default NavigationSidebar;