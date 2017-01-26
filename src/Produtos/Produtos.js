import React from 'react';
import { Header } from '../../components/Header';;

export class  App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header title={'Produtos'} />
                Produtos
            </div>
        );
    }
}