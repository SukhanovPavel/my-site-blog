import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import  {addPost, updateNewPostText}  from './redux/state';

export let reRender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App 
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        dialogUsers={state.dialogue.users}
        messages={state.dialogue.messages}
        sidebarFriends={state.sidebarFriends}
        posts={state.contentPage.posts}
        newPostText={state.contentPage.newPostText}
      />
    </React.StrictMode>
  );
}