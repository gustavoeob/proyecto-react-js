import React from 'react'
import {Link} from 'react-router-dom';

const Err404 = () => {
  return (
    <div className="not-found">
        <p className="not-found-title">Error 404</p>
        <p className="not-found-subtitle">Page not found!</p>
        <p className="not-found-message"> This might happen because of a problem with the website, because the page was moved or deleted, or because you typed the URL wrong. </p>
        <Link className="not-found-redirect" to='/'> Go home</Link>
    </div>
  )
}

export default Err404;