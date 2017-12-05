import * as React from 'react';
import { connect } from 'react-redux';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { GetList, ChangeList } from '@Actions/pkd-list.action';
import { ChangeNavigation } from '@Actions/pkd-navigation.action';
import { SetPokemon } from '@Actions/pkd-selected.action';
import { LoaderBall } from '@Components/pkd-loader/pkd-loader.component';

interface IPkdListContainerProps {
    team: any
    list: any
    SetPokemon:any
};

interface IPkdListState {};

class PkdListContainer extends React.Component
    <IPkdListContainerProps, IPkdListState> {

    private _axios : AxiosInstance = Axios;
    private api: string = 'http://localhost:3000';

    componentDidMount(){};

    fetchPokemonData(name: string) {
        this._axios.get(`${this.api}/pokemon/${name}`)
        .then((response: AxiosResponse) => {
            this.props.SetPokemon(response.data)
        })
        .catch((err :AxiosError) => err)
    };

    render() : JSX.Element {
        const { list, team, SetPokemon } = this.props;
        const pokemonList = list.length > 0 ?
        list.map((item: any, i: number) => {
            let bookmark = false
            for(let i = 0; i < team.length; i++){
                team[i].id == item.id ? bookmark = true : null
            }
            const renderStar = bookmark ?
                (<i className="fa fa-star" aria-hidden="true"></i>) : null
            return (
                <Link key={i}
                    className={`pkd-explore-item shadow animated slideInUp ${bookmark ? 'bookmark' : 'NO'}`}
                    onClick={()=> this.fetchPokemonData(item.name)}
                    to={`/selected/${item.name}`}>
                        {renderStar}
                        <img src={item.sprites.back_default} alt="sprites"/>
                        <label>{item.name}</label>
                       
                </Link>
            )
        }) : <LoaderBall/>

        return (
            <div className="container">
                <div className="pkd-selected-pokemon">
                    <div className="pkd-explore-list">
                        {pokemonList}
                    </div>
                </div> 
            </div>
        );
    };
};






const mapStateToProps = ({list, team}: IPkdListContainerProps) => ({list, team});

const dispatchToProps = {
    SetPokemon
};

export default connect(mapStateToProps, dispatchToProps)(PkdListContainer)