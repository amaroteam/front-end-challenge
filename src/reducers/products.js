const products = (state=[], action) => {

  switch(action.type) {

    default:
      return state.map(val => {
        return Object.assign({}, val, {
          id: val.code_color
        })
      })

  }

}

export default products