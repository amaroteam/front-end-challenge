import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './ProductPage.css'

class ProductPage extends Component {
    

    constructor(props){
        super(props); 
        this.state = { product: this.props.location.query.product };
    }

  render() {
    return (
      <div>
      
        <NavigationBar />,
        <div className="card">
          <div className="row">
            <aside className="col-sm-5 border-right">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                   
                      <img alt={this.state.product.image} src={this.state.product.image} />
                    
                  </div>
                </div>
              </article>
            </aside>
            <aside className="col-sm-7">
              <article className="card-body p-5">
                <h3 className="title mb-3">{this.state.product.name}</h3>

                <p className="price-detail-wrap">
                  <span className="price h3 text-warning">
                    <span className="num">
                      {this.state.product.actual_price}
                    </span>
                  </span>
                  <span> { this.state.product.actual_price < this.state.product.regular_price ? ` was ${this.state.product.regular_price} ` : ''}</span>
                </p>

                <dl className="param param-feature">
                  <dt>Color</dt>
                  <dd>{this.state.product.color}</dd>
                </dl>


                <div className="row">
                  <div className="col-sm-5">
                    <dl className="param param-inline">
                      <dt>Quantity: </dt>
                      <dd>
                        <select className="form-control form-control-sm">
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                        </select>
                      </dd>
                    </dl>
                  </div>

                  <div className="col-sm-7">
                    <dl className="param param-inline">
                      <dt>Sizes: </dt>
                      <dd>
                          
                        { 
                            this.state.product.sizes.map( size => {
                                return (
                                    <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                    />
                                    <span className="form-check-label"> { size.size }</span>
                                    </label>
                                );

                            }) 
                        }
                      </dd>
                    </dl>
                  </div>
                </div>

                <a
                  href="http://google.com.br"
                  className="btn btn-lg btn-outline-primary text-uppercase"
                >
                  {" "}
                  <i className="fas fa-shopping-cart"></i> Add to cart{" "}
                </a>
              </article>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;

