import React from 'react';

export class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className={'header-app'}>
                    <div className={'title'}>
                        { this.props.title }
                    </div>
                </div>
                <div className={'header-image'}></div>
                <div className={'name'}>
                    { this.props.name }
                </div>
            </div>
        );
    }
}