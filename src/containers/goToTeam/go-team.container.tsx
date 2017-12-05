import * as React from 'react';
import { connect } from 'react-redux';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { Link } from 'react-router-dom';

interface IPkdTeamProps {
    team: any
}

class GoToTeamContainer extends React.Component<IPkdTeamProps, undefined> {

    componentDidMount(){};

    render() : JSX.Element {
        const { team } = this.props;
        return (
            <Link className="goToTeam shadow" to={`/team`}>Ma team {team.length}/6</Link>
        );
    };
};




const mapStateToProps = ({team}: IPkdTeamProps) => ({team});

const dispatchToProps = {};

export default connect(mapStateToProps, dispatchToProps)(GoToTeamContainer)