import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ICONS = [
  {
    image: '/facebook.svg',
    url: 'https://facebook.com/groups/WeCodeALot'
  },
  {
    image: '/discord.svg',
    url: 'https://discordapp.com/channels/349872637645684736/413628419226468352'
  },
  {
    image: '/twitter.svg',
    url: 'https://twitter.com/qutcode'
  }
]

const Div = styled.div`
  display: flex;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  padding: 0.7rem;
  margin: 0 0.3rem;

  :hover {
    background-color: rgb(1, 214, 9);
  }
`

function SocialIcons({ style }) {
  const Icons = ICONS.map(function(icon) {
    return (
      <div key={icon.url}>
        <a href={icon.url}>
          <Div>
            <img
              style={{
                maxWidth: '2rem',
                width: '5vw',
                marginBottom: 0
              }}
              src={icon.image}
            />
          </Div>
        </a>
      </div>
    )
  })
  return <div style={style}> {Icons}</div>
}

SocialIcons.propTypes = {
  style: PropTypes.object
}

export default SocialIcons
