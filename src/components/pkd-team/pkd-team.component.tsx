import * as React from 'react';
import { ResponsePokeApi, IPokStates } from '@Models/api-response.model';
import PkdTeamContainer from '@Containers/team/pkd-team-container';

// Styles 
require('./pkd-team.component.scss');

interface TeamPokeListStates {}
interface TeamPokeListProps {}

export class TeamPokeList extends React.Component
<TeamPokeListProps,TeamPokeListStates> {

    componentWillMount(){};

    render(){
        return (
            <PkdTeamContainer/>
        )
    };
};