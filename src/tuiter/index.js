import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ProfileScreen from "./profile-screen";
import BookmarksScreen from "./bookmarks-screen";
import HomeScreen from "./home-screen";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen/index";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tuitReducer from "./reducers/tuit-reducer";
const store=configureStore(
    {reducer:{who:whoReducer, tuits:tuitReducer}}
);

function Tuiter() {
return (
    <div>
        <Provider store={store}>
            <Nav />
            <div className="row">
                <div className="col-2">
                    <NavigationSidebar />
                </div>
                <div className="col-7">
                    <Routes>
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/explore" element={<ExploreScreen />} />
                        <Route path="/bookmarks" element ={<BookmarksScreen />}/>
                        <Route path="/profile" element={<ProfileScreen />}/>
                    </Routes>
                </div>
                <div className="col-3">
                    <h1>Who to follow</h1>
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    </div>
);
}
export default Tuiter;