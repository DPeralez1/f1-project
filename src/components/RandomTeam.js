import React from 'react'
import {TEAM_LIST} from '../TEAM_LIST'
import Image from 'react-bootstrap/Image';

const RandomTeamPicker = () => {
  const randomIndex = Math.floor(Math.random() * TEAM_LIST.length);
  const randomTeam = TEAM_LIST[randomIndex];
    
  
    return (
      <div className='m-4'>
        <h2>Your Team for this weekend!</h2>
        <p>Hint: Refresh the page if you'd prefer another</p>
        <p className="display-6 text-danger fw-bold">{randomTeam.team_name}</p>
        <Image src={randomTeam.image} fluid />
      </div>
    );
  };
  
  export default RandomTeamPicker;
