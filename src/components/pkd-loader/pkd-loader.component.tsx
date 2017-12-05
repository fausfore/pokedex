import * as React from 'react';

// Styles 
require('./pkd-loader.component.scss');

export class LoaderBall extends React.Component
<undefined,undefined> {
    render(){
        return (
        <div className="center-on-page">
            <div className="pokeball">
                <div className="pokeball__button"></div>
            </div>
        </div>
        )
    };
};