import './App.css';
import React from 'react';
import users from './userss-avatar.jpg';

function Profile() {
  return (
    <div >
     <h1>Profile</h1>
     <img src={users} width="700" height="300" />
    </div>
  );
}

export default Profile;
