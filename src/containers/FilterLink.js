import { connect } from 'react-redux'
// import Link from '../components/Link'
import { NavItem } from 'react-bootstrap'
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return { active: ownProps.filter === state.filter }
}

const mapDispacthToProps = (dispatch, ownProps) => {
  return {
    onSelect() {
      dispatch(
        setFilter( ownProps.filter ) )
    } 
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispacthToProps
)(NavItem)

export default FilterLink