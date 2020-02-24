import Img from "gatsby-image"
import React from "react"


const ExecWindow = ({ exec }) => (   
    <div style= {{
      textAlign: "center",
      width: 200,
        margin: 5,
      display: 'inline-block',
    }}>
      <Img fluid={{...exec.photo.fluid, aspectRatio: 1}} style={{
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: '#01d609',
        borderWidth: 10
      }}/>
      <h3>{exec.name}</h3>
      <h4>{exec.role}</h4>
    </div>
 )

export default ExecWindow;