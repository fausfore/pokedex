import * as React from 'react';
import { connect } from 'react-redux';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { GetPokemon } from '@Actions/pkd-selected.action';
import { AddPokemon } from '@Actions/pkd-team.action';
import { LoaderBall } from '@Components/pkd-loader/pkd-loader.component'
import { Link } from 'react-router-dom';
import { ResponsePokeApi } from '@Models/api-response.model';

interface IPkdProfilProps {
    team: ResponsePokeApi[]
    selected: ResponsePokeApi
    GetPokemon: any
    AddPokemon: any
}
interface IPkdProfilStates {
    isAllReadyAddValue: boolean
}

class PkdProfilContainer extends React.Component<IPkdProfilProps, IPkdProfilStates> {

    private _axios : AxiosInstance = Axios;
    private api: string = 'http://localhost:3000';
    public state = {
        isAllReadyAddValue: false
    }

    componentDidMount(){};

    isAllReadyAdd(){
        let check = false
        this.props.team.map((item) => {
            if(item.id === this.props.selected.id) {
                check = true
            } 
        });
        this.state.isAllReadyAddValue = check
    };

    render() : JSX.Element {
        const { selected, team, GetPokemon, AddPokemon } = this.props;

        this.isAllReadyAdd();

        const renderStart = team.map((pokemon: ResponsePokeApi, i: number) => {
            if(pokemon.id === selected.id) {
                return <i key={i} className="fa fa-star centerY" aria-hidden="true"></i>          
            } 
        })

        const listElement = selected.types ?
            selected.types.map((item: any, i: number) => {
                return (
                <label className={`element_type pk-type-bg ${item.type.name}`}
                    key={i}>{item.type.name}</label>
                )
            }) : null

        const skills = selected.stats ?
            selected.stats.map((item: any, i: number) => {
                return (
                    <tr key={i}>
                        <td>{item.stat.name}</td>
                        <td>{item.base_stat}</td>
                        <td>{item.effort}</td>
                    </tr>
                )
            }) : null     

        const pokemonDetails = selected.name ? (
            <article className="selected-article">
            <h2 className="selected-title">{selected.name}</h2>
            <div className="global-infos">
                <img src={selected.sprites.front_default} alt="sprites"/>
                <div className="infos">
                    <p>Types : {listElement}</p>
                    <p>Weight : {selected.weight}</p>
                    <p>Height : {selected.height}</p>
                    <div className="add_to_team">
                        <button
                            className="btn primary"
                            disabled={this.state.isAllReadyAddValue}
                            onClick={() => AddPokemon(selected)}>
                            Ajouter ma team
                        </button>
                        {renderStart}
                    </div>
                    
                </div>
            </div>
            <div className="skills-table">
            </div>
            <table className="table shadow">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>base stat</th>
                        <th>effort</th>
                    </tr>
                    {skills}
                </tbody>
            </table>
        </article>
        ) : <LoaderBall/>

        return (
            <div>
                { pokemonDetails }
            </div>
        );
    };
};




const mapStateToProps = ({selected, team}: IPkdProfilProps) => ({selected, team});

const dispatchToProps = {
    GetPokemon,
    AddPokemon
};

export default connect(mapStateToProps, dispatchToProps)(PkdProfilContainer)