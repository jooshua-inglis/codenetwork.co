import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import ExecPreview from '../components/execPreview'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import styled from 'styled-components'


const IndexPage = () => {
  const execs = useStaticQuery(graphql`
    {
      allExecsYaml {
        nodes {
          name
          role
          photo {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `).allExecsYaml.nodes

  const Bug = styled.div`
    color: red;
    img {
      width: 100px;
    }
  `

  return (
    <Layout>
      <div>
        <SEO title="Home" />
        <h1>We Are Code Network</h1>
        <h2>Build anything, as long as it&apos;s awsome</h2>
        <p>
          Our members are heavily involved in the local and international startup
          scene. Our goal as an organisation is to help create the best developer
          talent in the world, starting here in Brisbane. We’re based at QUT and
          are expanding to other universities and organisations in the area.
        </p>
        <p>
          This site is a work in progress. If you'd like to contribute, you can
          do so <a href="https://github.com/codenetwork/codenetwork.co">here</a>
        </p>
      </div>

      <div>
        <h1>Our Team</h1>
        <ExecPreview execs={execs} />
      </div>
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
