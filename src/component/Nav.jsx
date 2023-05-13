import React,{Component} from "react";
import {Link} from "react-router-dom"


class Nav extends React.Component{
    render(){
        return(
            <>

                <ul className=" d-flex gap-5 justify-content-end mx-auto container-fluid ">
                   <Link className="link" to={"/home"}> <li>Home</li></Link>
                   <Link className="link" to={"/gallery"}> <li>Gallery</li></Link>
                   <Link className="link" to={"/contact"}> <li>Contact</li></Link>
                   <Link className="link" to={"/services"}> <li>Services</li></Link>
                   <Link className="link" to={"/about"}> <li>About-Us</li></Link>
                </ul>

            </>
        )
    }
}
export default Nav