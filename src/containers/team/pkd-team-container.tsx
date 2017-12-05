import * as React from 'react';
import { connect } from 'react-redux';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { RemovePokemon } from '@Actions/pkd-team.action';
import { SetPokemon } from '@Actions/pkd-selected.action';

import { Link } from 'react-router-dom';
import { LoaderBall } from '@Components/pkd-loader/pkd-loader.component'

// Styles
require('./pkd-team-container.scss');

interface IPkdTeamProps {
    team: any
    RemovePokemon: any
    SetPokemon: any
}

class PkdTeamContainer extends React.Component
    <IPkdTeamProps, undefined> {

    componentDidMount(){};

    render() : JSX.Element {
        const { team, RemovePokemon, SetPokemon } = this.props;
        const renderListTeam = team.length > 0 ?
        team.map((pokemon: any, i: number) => {
            return (
                <li className="team-list-item" key={i} onClick={() => SetPokemon(pokemon)}>
                <img className="item-sprite" src={pokemon.sprites.front_default} alt="sprites"/>
                    <Link className="item-name" to={`/selected/${pokemon.name}`}>
                        <label>{pokemon.name}</label>
                    </Link>
                    <button
                        className="remove-pokemon shadow"
                        onClick={() => RemovePokemon(pokemon.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </li>
            )
        }) : null 
        return (
            
            <div className="pkd-team">
                <ul className="pkd-list-team">
                    { renderListTeam }
                </ul>   
            </div> 
        );
    };
};




const mapStateToProps = ({team}: IPkdTeamProps) => ({team});

const dispatchToProps = {
    RemovePokemon,
    SetPokemon
};

export default connect(mapStateToProps, dispatchToProps)(PkdTeamContainer)