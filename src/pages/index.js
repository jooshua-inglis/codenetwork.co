import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <h1>We Are Code Network</h1>
    <p>Build anything, as long as it's awsome</p>
    <h1>Our Team</h1>
  </Layout>
)

export default IndexPage
