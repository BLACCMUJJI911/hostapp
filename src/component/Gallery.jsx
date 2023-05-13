import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Reveal } from "react-reveal";


class Gallery extends React.Component {
    render() {
        return (
            <>
                <Reveal effect="fade">

                    <h1 style={{textAlign:"center"}}>Gallery</h1>
                    <div className="mt-3 gap-2 gallery-container container-fluid gap d-grid justify-content-center col col-lg-4 col-sm-3 col-md-4">

                        <img className="im1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1A-zOh0GNkGUjxZkPvpAFF44ySV66DB61Sg&usqp=CAU" alt="" />
                        <img className="im1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhyoXceApryFS6z5mPzVYNh16ouVnthSyWg&usqp=CAU" alt="" />
                        <img className="im1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPgGNilCwpUeRQjMqoIQFJqH_jGew_DNx8w&usqp=CAU" alt="" />
                        <img className="im1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxbRnUFVrvL27o4qY7ZoN6qbY_WhlGyAHAg&usqp=CAU" alt="" />
                        <img className="im1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gxQxyo1Ua-k26Nryr0wKa7TP9Wb-qWsp1w&usqp=CAU" alt="" />
                        <img className="im1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCR_RAs1Jq7MFzhYTlRBG2onUn4Vi3FCFh8P4IP0EcFRnNNaNp1He6q-fpLtXot3geHnM&usqp=CAU" alt="" />









                    </div>


                    <footer className="ftr">
                        <span>
                            <div className=" d-grid gap-2 container-fluid col col-lg-12 col-md-4 col-sm-3">

                                <ul>
                                    <li>Contact</li>
                                    <li>Phone No: +92 34-2344423</li>
                                    <li>Tel No: 022-2472367</li>
                                    <li>About-Us</li>
                                    <li>For More</li>
                                </ul>

                            </div>

                            <div className="d-grid justify-content-end shrt mx-4 gap-1">
                                <input type="text" name="" id="" placeholder="Name" />
                                <input type="text" name="" id="" placeholder="Last Name" />
                                <input type="email" name="" id="" placeholder="E-mail" />
                                <textarea name="cmnt" id="txta" cols="30" rows="4" placeholder="Write Your Opinions..."></textarea>
                                <button className="btna" type="submit">Submit Feedback</button>

                            </div>
                        </span>
                        <div className="text-center">
                            <b>All Rights Reserved By Nissan&copy;</b>
                        </div>

                    </footer></Reveal>



            </>



        )
    }
}
export default Gallery