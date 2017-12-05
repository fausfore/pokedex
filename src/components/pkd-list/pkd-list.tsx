import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import { Link } from 'react-router-dom';
import { mockListData } from '@Mocks/mock-data-list'
import PkdListContainer from '@Containers/list/pkd-list-container';
import PkdNavContainer from '@Containers/navigation/pkd-navigation-container';

// Styles
require('./pdk-list.component.scss');

interface IPokeListProps {};

interface IPokeListState {};

export class PkdList extends React.Component<IPokeListProps, IPokeListState> {
 
    componentDidMount(){};

    render() {
        return (
            <div className="pkd-list-container">
                <div className="navigation-container">
                    <PkdNavContainer/>
                </div>
                <div className="list-result-container">
                    <PkdListContainer/>
                </div>
            </div>
        )
    };
};


