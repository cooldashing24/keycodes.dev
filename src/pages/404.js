import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <div className="not-found">
      <p>Page not found! <Link to="/">Return home.</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
