import React,{Component} from "react";
import {Link} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import { Reveal } from "react-reveal";


class Home extends React.Component{
    render(){
        return(
            <>
            <Reveal effect='fade'>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 aa"
          src="https://i.pinimg.com/originals/13/19/7d/13197dcd4ab2f0de71b498fa5c291ed6.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 aa"
          src="https://cdn.motor1.com/images/mgl/JJkj4/s1/nissan-gt-r-t-spec.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 aa"
          src="https://www.cnet.com/a/img/resize/35ec42f9d754c24ed66aad6dac7759e713fd4e85/hub/2019/07/09/daa733a7-899f-4d97-a21f-0f18ef863157/2020-nissan-gt-r-nismo-001.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container-fluid">

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
                    <textarea name="cmnt" id="txta" cols="30" rows="4"  placeholder="Write Your Opinions..."></textarea>
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
export default Home