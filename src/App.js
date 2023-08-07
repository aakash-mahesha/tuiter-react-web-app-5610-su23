// import logo from './logo.svg';
import './App.css';
import Labs from './labs';
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import {  HashRouter } from 'react-router-dom';
import { Routes , Route , Navigate} from 'react-router';
import AuthContext from './tuiter/user/auth-context';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import whoReducer from './tuiter/reducers/who-reducer';
import tuitReducer from './tuiter/reducers/tuit-reducer';
import authReducer from './tuiter/reducers/auth-reducer';
import ProtectedRoute from './tuiter/user/protected-route';
import ProfileScreen from './tuiter/user/profile-screen';


const store=configureStore(
  {reducer:{who:whoReducer, tuits:tuitReducer, user:authReducer}}
);
function App() {
  return (
    <Provider store={store}>
        <HashRouter>
      <AuthContext>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Navigate to="/labs/a3"/>}/>
            <Route path='/labs/*' element={<Labs/>}/>
            <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
            <Route path="/profile" element={<ProtectedRoute><ProfileScreen/></ProtectedRoute>}/>
          </Routes>
        </div>
      </AuthContext>
      </HashRouter>
    </Provider>
  );
}
export default App;
