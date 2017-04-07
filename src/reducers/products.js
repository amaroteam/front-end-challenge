const products = ( state=[], action ) => {

  switch( action.type ) {

    default:
      return state.map( item => ( {
        ...item,
        id: item.code_color } ) )

  }

}

export default products