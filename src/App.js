import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Dialogue from "./components/Dialogue/Dialogue";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import styles from './App.module.css';

const App = (props) => {
  
  return (
    
    <BrowserRouter>
      <div className={styles.app}>
        
        <Header className={styles.header} />
        
        <div className={styles.main}>
          
          <Sidebar sidebarFriends={props.sidebarFriends}/>
          
          <Routes>
            <Route element={<Content posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>} path="/profile" />
            <Route element={<Dialogue users={props.dialogUsers} messages={props.messages}/>} path="/dialogues" />
            <Route element={<News />} path="/news" />
            <Route element={<Music />} path="/music" />
            <Route element={<Settings />} path="/settings" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
