import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const KeyBlock = ({ title, value }) => {
  return (
    <div className="keys__info">
      <h3>{title}:</h3>
      <p>{value ? value : "Please press any key"}</p>
    </div>
  )
}

const IndexPage = () => {
  const [key, setKey] = useState({ value: null, code: null })

  const handleKey = (e) => {
    setKey({ value: e.key, code: e.keyCode })
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="keys">
        <KeyBlock
          title="Key Value"
          value={key.value}
        />
        <KeyBlock
          title="Key Code"
          value={key.code}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
