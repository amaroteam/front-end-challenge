const products = ( state={ status: 1, data: [] }, action ) => {

  switch( action.type ) {

    case 'FETCHING':
      return {
        ...state,
        status: 2
      }

    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        status: 1,
        data: action.products.map( item => ({
          ...item,
          id: item.code_color }) )
      }

    case 'FETCH_PRODUCTS_FAIL':
      return {
        ...state,
        status: 0,
        err: action.err
      }

    default:
      return state

  }

}

export default products