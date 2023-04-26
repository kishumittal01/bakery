import React from 'react'

function Footer() {
  return (
    <div>
      <h1 style={{backgroundColor: "black", color: "white"}}>Copyright © {(new Date().getFullYear())}</h1>
    </div>
  )
}

export default Footer
