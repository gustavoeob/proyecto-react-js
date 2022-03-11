import React from 'react'
import loading from '../Product/loading.gif'

const Loading = () => {
  return (
    <>
        <div className="loading-prompt">
          <img className="loading" src={loading} alt="loading circular animation "/>
        </div>;
    </>
  )
}

export default Loading