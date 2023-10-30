import React from 'react'
  
export default function Category(props) {
      return (
          <>
              <div className="container">
                  <h1>{props.data.category}</h1>
              </div>
          </>
      )
  }
  
 