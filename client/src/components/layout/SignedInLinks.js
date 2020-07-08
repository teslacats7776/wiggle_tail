import React from "react"
import {NavLink} from "react-router-dom"
const SignedInLinks = () => {
    return (
       <ul className="right">
           <li><NavLink to="/createpost">Posting Board</NavLink></li>
           <li><NavLink to="/">Log Out</NavLink></li>
           <li><NavLink to="/" className="btn btn-floating pink lighten-1">CT</NavLink></li>
       </ul>
    )
}

export default SignedInLinks