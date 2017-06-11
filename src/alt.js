import Alt from 'alt';
const alt = new Alt();

export default {

  createActions: _class => {
    return alt.createActions(_class);
  },

  createStore: _class => {
    return alt.createStore(_class, _class.prototype.constructor.name);
  }


}; 