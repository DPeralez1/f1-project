import React from 'react'
import {TEAM_LIST} from '../TEAM_LIST'

const RandomTeamPicker = () => {
    const pickRandomTeam = () => {
      const randomIndex = Math.floor(Math.random() * TEAM_LIST.length);
      return TEAM_LIST[randomIndex].team_name;
    };
  
    return (
      <div>
        <h2>Your Team for this weekend!:</h2>
        <p className="display-6 text-danger fw-bold">{pickRandomTeam()}</p>
      </div>
    );
  };
  
  export default RandomTeamPicker;
