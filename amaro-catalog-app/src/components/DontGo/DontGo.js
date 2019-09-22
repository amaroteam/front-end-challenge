import React, {Component} from 'react';
import './DontGo.css';
import AmaroLogo from '../../logo.svg'

class DontGo extends Component{
  render() {
    return (
      <>
        <div
          className=""
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="amaroDontGoModal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <img alt="Logo Amaro" src={AmaroLogo} />
              <div className="modal-header">
                <h5 className="modal-title" id="amaroDontGoModal">
                  Ei, que tal 10% off em toda a loja?
                </h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Deixa seu e-mail com a gente?
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="recipient-name"
                    ></input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-success">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  }
  
}

export default DontGo;