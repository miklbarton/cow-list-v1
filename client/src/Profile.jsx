import React from 'react';

const Profile = (props) => {
  let profilePic = "https://media.giphy.com/media/h55EUEsTG9224/giphy.gif";
  let mooCow = '/client/src/assets/moo-cow.jpg';
  if (props.cow.cow_name === 'MooCowMoo') {
    profilePic = mooCow;
  }
  return (
    <div className="split cow-profile">
      <div className="main-profile">
        <h2 className="profile-title">HAVE A COW:</h2>
        <img className="profile-pic" src={profilePic} alt="Profile picture for a selected cow" />
        <h3 className="profile-name">{props.cow.cow_name}</h3>
        <h6 className="profile-desc">{props.cow.cow_desc}</h6>
      </div>
    </div>
  )
}

export default Profile;