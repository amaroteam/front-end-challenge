import React from 'react';

export class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'header-app'}>
                <div className={'title'}>
                    { this.props.title }
                </div>
            </div>
        );
    }
}