import React from 'react'

function Footer(){
  return(
      <footer >
          <div style={footerStyle} className="footer-flex-container">
           <ul className="footer-list">
               <li>React Demo</li>
               <li>No-Copywrite 2019</li>
               <li>Created by Andrew Dinsmore</li>
           </ul>
          </div>
      </footer>
  )
}
const footerStyle = {
    position: 'absolute',
    bottom: '0',
    width:'100%',
    background:'#333',
    color: '#fff',
    textAlign:'left',
    padding: '10px'
}
export default Footer