import * as React from 'react';
import { connect } from 'react-redux';
import Axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { LoaderBall } from '@Components/pkd-loader/pkd-loader.component';
import { RemovePokemon } from '@Actions/pkd-team.action';
import { GetList, ChangeList } from '@Actions/pkd-list.action';
import { ChangeNavigation, SetCurrentNav } from '@Actions/pkd-navigation.action';

interface IPkdNavProps {
    navigation: any
    ChangeList: any
    ChangeNavigation: any
    SetCurrentNav: any
};

interface IPkdNavStates {
    limit?: number
    pagination?: number[]
    current_navigation?: number
};

class PkdNavContainer extends React.Component<IPkdNavProps, IPkdNavStates> {

    private _axios : AxiosInstance = Axios;
    private api: string = 'http://localhost:3000';
    public state = {
        limit: 40,
        pagination: [1]
    };

    componentDidMount(){
        this.requestPokemons(this.state.limit,this.props.navigation.offset)
    };

    generatePagination(x: number){
        let array = []
        let maxArrayLength = 6
        let NegatifIterable = this.props.navigation.current_navigation
        let PositifIterable = this.props.navigation.current_navigation

        array.push(this.props.navigation.current_navigation)

        for(let i = 0; i <= 6; i++) {
            NegatifIterable -= 1
            PositifIterable += 1
            if(array.length <= maxArrayLength && NegatifIterable >= 0) {
                array.push(NegatifIterable)
            }
            if(array.length <= 6 && PositifIterable <= x) {
                array.push(PositifIterable)
            }
        }
            
        function compare(x: number, y: number) {
            return x - y;
        }

        let response = {
            offset: this.props.navigation.offset,
            current_navigation: this.props.navigation.current_navigation,
            list: array.sort(compare)
        }
            
        // Créer la liste de pagination
        this.props.ChangeNavigation(response);
    };

    requestPokemons(limit: number, offset: number) {
        this._axios.get(`${this.api}/pokemon/${limit}/${offset}`)
        .then((response: AxiosResponse) => {
            this.props.ChangeList(response.data.results)
            this.generatePagination(response.data.pagination)
        })
        .catch((err :AxiosError) => err)
    };

    navigateTo(pagination: number){
        let nextOffset = pagination * this.state.limit
        this.props.SetCurrentNav({
            offset: nextOffset,
            current_navigation: pagination
        });
        this.requestPokemons(this.state.limit, nextOffset);
    };

    nextItem(){
        let nextOffset = this.props.navigation.offset + 20;
        this.props.SetCurrentNav({
            offset: nextOffset,
            current_navigation: this.props.navigation.current_navigation += 1
        });

        this.requestPokemons(this.state.limit, nextOffset);
    };

    prevItem(){
       if(this.props.navigation.offset === 0) return
       let nextOffset = this.props.navigation.offset - 20
       this.props.SetCurrentNav({
            offset: nextOffset,
            current_pagination: this.props.navigation.current_pagination -= 1
       });
       
       this.requestPokemons(this.state.limit, nextOffset);
    };

    render() : JSX.Element {
        const { navigation } = this.props;
        const renderListNav = navigation.list.length > 0 ?
        navigation.list.map((item: any, i: number) => {
            return (
                <button key={i}
                    className={`${this.props.navigation.current_navigation === item ? 'active' : ''}`}
                    onClick={() => this.navigateTo(item)}>
                    {item}
                </button>
            )
        }) : null
        return (
            <div className="pagination">
                <button className="btn primary"
                    onClick={() => this.prevItem()}>
                    Précédent
                </button>
                <div className="pagination-number">
                    { renderListNav }
                </div>
                <button className="btn primary"
                    onClick={() => this.nextItem()}>
                    Suivant
                </button>
            </div>        
        );
    };
};




const mapStateToProps = ({navigation}: IPkdNavProps) => ({navigation});

const dispatchToProps = {
    ChangeList,
    ChangeNavigation,
    SetCurrentNav
};

export default connect(mapStateToProps, dispatchToProps)(PkdNavContainer)