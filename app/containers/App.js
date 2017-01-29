import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { footer } from '../styles/footer.scss'

const App = ({ children }) =>
    <main>
        <h1>Filter table</h1>
        { children }
        <footer className={ footer }>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
        </footer>
    </main>

App.propTypes = {
    children: PropTypes.object
}

export default App