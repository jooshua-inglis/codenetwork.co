import React from 'react'
import styled from 'styled-components'

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
  min-height: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  padding: 0.5rem;

  :hover {
    background-color: rgb(1, 214, 9);
  }
`

function SocialIcons({ style }) {
  const Icons = ICONS.map(function(icon) {
    return (
      <div
        style={{
          display: 'inline-block'
        }}
        key={icon.url}
      >
        <a
          style={{
            display: 'float'
          }}
          href={icon.url}
        >
          <Div>
            <img
              style={{
                width: '2rem',
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

export default SocialIcons
