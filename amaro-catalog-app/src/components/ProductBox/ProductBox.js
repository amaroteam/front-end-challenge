import React, { Component } from 'react';


export default class Catalog extends Component {

    
    render() {
        return (
            <div className="container" >
                <div className="row">
                    {


                        this.state.amaroProducts.map((product, id) =>


                            <div className="col-md-4 mb-3">
                                <div className="card" key={product.id}>
                                    <img className="card-img-top" src={product.image} alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.actual_price}</p>
                                        <a href="google.com.br" className="btn btn-primary">Visitar</a>
                                    </div>
                                </div>

                            </div>




                        )
                    }




                </div>
            </div>

        );
    }
}
