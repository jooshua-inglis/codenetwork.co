import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import SocialIcons from './socialIcons'
import styled from 'styled-components'
import Navbar from './navbar'

const CodeNetworkLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const JoinButton = styled.a`
  appearance: button;
  position: relative;
  background: #01d609;
  width: 150px;
  margin: 0 auto;
  bottom: -13px;
  border-radius: 20px;
  border-style: none;
  text-align: center;
  padding-top: 11% 0;
  font-family: sans;
  color: black;
  font-weight: bold;
  line-height: 2.3;
  box-shadow: 0 0 10px;
  text-decoration: none;
  transition: 0.5s;

  :hover {
    background: #00ff0a;
  }
`

const TopBar = styled.div`
  position: absolute;
  min-width: 100%;
  padding: 0 7vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar,
  .social-icons {
    display: flex;
  }
`

const StyledLogo = styled.div`
  margin: 0 auto;
  max-width: 200px;
  width: 30vw;
  padding: 2.5rem 1.0875rem 1.2rem;
`

const Header = () => (
  <header>
    <TopBar>
      <SocialIcons className="social-icons" />
      <Navbar className="navbar" />
    </TopBar>
    <StyledLogo>
      <Link to="/">
        <CodeNetworkLogo />
      </Link>
    </StyledLogo>
    <JoinButton href="https://facebook.com"> Join Now </JoinButton>
  </header>
)

export default Header
