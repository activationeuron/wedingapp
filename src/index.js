import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RsvpList from './component/RsvpList';
import Invite from './component/Invite';
import InviteOne from './component/InviteOne';

const Application = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/rsvp' element={<RsvpList />}></Route>
        <Route exact path='/invite' element={<Invite />}></Route>
        <Route exact path='/inviteone' element={<InviteOne />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
