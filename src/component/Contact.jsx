import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Reveal } from "react-reveal";
// import { Formik, Field, Form } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Contact extends React.Component {
    render() {
        return (
            <>
                <Reveal effect="fade">
                    

                    <h1 style={{textAlign:"center"}}>Contact </h1>
                    <div className="container-fluid w-50">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name*" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name* " />
                            </Form.Group>

                            

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email*" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password*" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check If Not a Robot" />
                            </Form.Group>

                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
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

                    </footer>
                </Reveal>

            </>
        )
    }
}
export default Contact