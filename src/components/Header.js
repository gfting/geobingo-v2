import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
/* eslint-disable */
class Header extends Component {
render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
<div className="flex pa1 justify-between nowrap plum">
        <div className="flex flex-fixed black">Make your very own custom bingo</div>
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">GeoBingo!</div>      
</div>
        <div className="flex flex-fixed">
        <Link to="/test" className="ml1 no-underline justify-right darkblue">
        Create New Bingo
      </Link>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)