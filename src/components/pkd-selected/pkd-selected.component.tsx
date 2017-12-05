import * as React from 'react';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { mockSelected } from '@Mocks/mock-selected';
import { ResponsePokeApi, IPokStates } from '@Models/api-response.model';
import { LoaderBall } from '@Components/pkd-loader/pkd-loader.component';
import PkdProfilContainer from '@Containers/profil/pkd-profil.container';

// Styles
require('./pkd-selected.component.scss')

interface ISelectedPokemonProps {
    data: any
}
interface ISelectedPokemonState {
    pokemon: ResponsePokeApi
}

export class SelectedPokemon extends React.Component
    <ISelectedPokemonProps,ISelectedPokemonState> {

        private _axios : AxiosInstance = Axios
        private api: string = 'http://localhost:3000'

        public state : ISelectedPokemonState= {
            pokemon: {}
        }
        constructor(props: ISelectedPokemonProps){
            super(props)
        }
        
        componentDidMount(){};

        render(){

            return (
                <div className="pkd-selected-pokemon">
                    <PkdProfilContainer/>
                </div> 
            )
             
        }
    }