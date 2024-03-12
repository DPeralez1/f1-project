import React from 'react'
import {TEAM_LIST} from '../TEAM_LIST'
import {Card, CardImg } from 'reactstrap';

const TeamImage = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.TEAM_LIST.image}
                alt={props.TEAM_LIST.team_name}
            /> 
        </Card>
    );
};


export default TeamImage;