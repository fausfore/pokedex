import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Axios, { AxiosResponse } from 'axios';
import { PkdList } from './pkd-list/pkd-list';
import { SelectedPokemon } from './pkd-selected/pkd-selected.component';
import { TeamPokeList } from './pkd-team/pkd-team.component'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { NotMatch } from '../components/not-match/not-match.component';
import PkdSearchContainer from '../containers/search/pkd-search-container';
import PkdGoToTeamContainer from '../containers/goToTeam/go-team.container';

// Styles
require('./app.component.scss');

interface IAppComponentState {};

type IAppComponentProps = {};

export class AppComponent extends React.Component
<IAppComponentProps,IAppComponentState> {

    constructor(props: IAppComponentProps){
        super(props)
    }
    render(): JSX.Element{
        return (
            <Router>
                <div className="pkd-app">
                    <header className="pkd-header">
                        <div className="pkd-title centerY">
                            <div className="logo-container">
                                <img src="src/assets/images/pokeball.svg" alt=""/>
                            </div>
                            <label>Pokédex</label>
                        </div>
                        <PkdGoToTeamContainer/>    
                        <Link className="goToTeam shadow" to={`/list`}>Liste</Link>
                        <div className="pkd-search-container">
                            <PkdSearchContainer/>
                        </div>   
                    </header>                  
                    <div className="pkd-main-content">
                        <Switch>
                            <Route exact path="/selected/:name" component={SelectedPokemon} />
                            <Route exact path="/list" component={PkdList}/>
                            <Route exact path="/team" component={TeamPokeList}/>
                            <Route component={TeamPokeList}/>
                        </Switch>
                    </div>
                    <footer className="pkd-footer">
                        Provider by PokéApi
                    </footer>
                </div>
            </Router>  

        )
    }
}




  

