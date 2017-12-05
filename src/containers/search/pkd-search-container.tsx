import * as React from 'react';
import { connect } from 'react-redux';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { SetPokemon } from '@Actions/pkd-selected.action';
import { Link } from 'react-router-dom';

// Styles
require('./pkd-search-container.scss');


interface IPkdSearchProps {
    SetPokemon: any
};

interface IPkdSearchState {
    term: string
    pokemonList: string[]
};

class PkdSearchContainer extends React.Component<IPkdSearchProps, IPkdSearchState> {

    private _axios : any = Axios;
    private api: string = 'http://localhost:3000';

    public state : IPkdSearchState = {
        term: '',
        pokemonList: []
    };

    componentDidMount(){
        this.getAll()
    };

    requestPokemonInfo(name: string) {
        this._axios.get(`${this.api}/pokemon/${name}/`)
        .then((response: AxiosResponse) => {
            this.props.SetPokemon(response.data);
        })
        .catch((err :AxiosError) => err)
    };

    getAll() {
        this._axios.get(`${this.api}/pokemon/list`)
        .then((res: AxiosResponse) => {
            this.setState({
                pokemonList : res.data
            })

        })
        .catch((err : any) => err)
    };

    handleChange(event: any){
        this.setState({
            term: event.target.value
        })
    };

    selectedPokemon(name: string){
        this.requestPokemonInfo(name.toLowerCase())
        this.setState({
            term: ''
        })
    };

    render() : JSX.Element {
        const PokemonNames = this.state.term.length > 0 ?
            this.state.pokemonList.map((pokemon, i) => {
            return pokemon.toLowerCase().includes(this.state.term.toLowerCase()) ?
                <Link key={i} to={`/selected/${pokemon.toLowerCase()}`}>
                    <li className="search-item"
                        onClick={()=> this.selectedPokemon(pokemon)}>
                        {pokemon}
                    </li>
                </Link>
                : null
        }) : null
        return (
            <div className="pkd-search">
                <i className="fa fa-search centerXY" aria-hidden="true"></i>
                <input type="text"
                    className="search-bar"
                    placeholder="Recherchez votre pokémon"
                    value={this.state.term}
                    onChange={(e)=> this.handleChange(e)}/>

                <ul className="result-search shadow centerX">
                    {PokemonNames}
                </ul>
            </div>
        )
    };
};




const mapStateToProps = ({}: IPkdSearchProps) => ({});

const dispatchToProps = {
    SetPokemon
};

export default connect(mapStateToProps, dispatchToProps)(PkdSearchContainer)