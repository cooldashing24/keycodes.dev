import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
