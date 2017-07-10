const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_LIST_FILTER':
      return action.activeFilter.activeFilter
    default:
      return state
  }
}

export default visibilityFilter
