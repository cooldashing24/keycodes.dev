import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"
import About from "./about"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <About />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
