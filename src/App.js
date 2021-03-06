// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route} from "react-router-dom";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";






const App = (props) => {
    return (
            <div className='app_Wrapper'>
                <HeaderContainer />
                <Nav /> {/*state ={props.state.sitebarPage}*/}
                <div className ='app-wrapper-content'>
                    <Route path="/Profile/:userId?" render={ ()=> <ProfileContainer />} />
                    <Route path="/Users" render={ ()=> <UsersContainer />} />

                    <Route path="/Dialogs" render={ ()=> <DialogsContainer />} />
                    <Route path="/News" render={ ()=> <News />} />
                    <Route path="/Music" render={ ()=> <Music />} />
                    <Route path="/Settings" render={ ()=> <Settings />} />
                </div>
            </div>
    );
};


// это компоненты и их можно записать двумя способами
// function welcome () {
//   return <h1>Hello first world comp</h1>
// }
//
// const Welcome () => {
//   return <h1>Hi first world i comp to</h1>
// }


//более сложные компоненты 
// function Header () {
//   return (
//     <div>
//       <a>Home</a>
//       <a>New feed</a>
//       <a>Message</a>
//     </div>
//   )
// }

// const Header = () => {
// return(
//   <div>
//     <a>Home</a>
//     <a>New feed</a>
//     <a>Message</a>
//   </div>
// )
// }


export default App;
