import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <p>You are on the 404 page.</p>
    <p><Link to="/">Go back home.</Link></p>
  </Layout>
)

export default NotFoundPage
