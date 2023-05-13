import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./component/Home"
import Gallery from "./component/Gallery"
import About from "./component/Aboutus"
import Contact from "./component/Contact"
import Services from "./component/Services"
import Nav from "./component/Nav"

class App1 extends React.Component{

    render(){   

        return(
            <>

            <Nav/>

            <Routes>

            <Route path="/home" element={<Home/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>


            </Routes>
            
         
            
            </>
        )

    }



}
export default App1