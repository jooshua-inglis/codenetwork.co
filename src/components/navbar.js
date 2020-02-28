import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ICONS = [
  {
    name: 'About',
    path: 'conteact'
  },
  {
    name: 'Contact',
    path: 'conteact'
  },
  {
    name: 'Events',
    path: 'conteact'
  }
]

const Div = styled.div`
  display: flex;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  padding: 0.2rem 0.4rem;
  margin: 0 0.5rem;
  color: white;
  font-weight: lighter;
  font-size: 2.5vw;

  @media screen and (min-width: 600px) {
    font-size: 0.9rem;
  }

  :hover {
    background-color: rgb(1, 214, 9);
  }
`

function Navbar({ style }) {
  const Icons = ICONS.map(function(icon) {
    return (
      <div key={icon.name}>
        <Link
          style={{
            textDecoration: 'none'
          }}
          to={icon.url}
        >
          <Div>{icon.name}</Div>
        </Link>
      </div>
    )
  })
  return <div style={style}> {Icons}</div>
}

Navbar.propTypes = {
  style: PropTypes.object
}

export default Navbar
