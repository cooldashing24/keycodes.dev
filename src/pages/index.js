import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="layout--keys">
      <p>You are on the index page.</p>
    </div>
  </Layout>
)

export default IndexPage
