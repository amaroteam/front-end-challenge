import { connect } from 'react-redux'
import Link from '../components/Link'
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return { active: ownProps.filter === state.filter }
}

const mapDispacthToProps = (dispatch, ownProps) => {
  return {
    onClick() {
      dispatch(
        setFilter( ownProps.filter ) )
    } 
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispacthToProps
)(Link)

export default FilterLink