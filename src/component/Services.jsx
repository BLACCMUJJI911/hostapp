import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Reveal } from "react-reveal";


class Services extends React.Component{
    render()
    {
        return(
            <>
            <Reveal effect="fade">
<div className="container d-flex justify-content-center border border-0 gap-2">
<Card className=" crd border-0 rounded shadow  bg-secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.nissanmotor.jobs/americas/img/canada_image01.jpg" />
      <Card.Body>
        <Card.Title>NISSAN CANADA Motors, INC.</Card.Title>
        <Card.Text>
        5290 Orbitor Drive, Mississauga, Ontario, L4W 4Z5, Canada
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className=" crd border-0 rounded shadow  bg-secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.nissanmotor.jobs/americas/img/us_image08.jpg" />
      <Card.Body>
        <Card.Title>Nissan North America HQ.NISSAN NORTH AMERICA HQ</Card.Title>
        <Card.Text>
        One Nissan Way, Franklin, TN 37067, U.S.A
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className=" crd border-0 rounded shadow  bg-secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.nissanmotor.jobs/amie/img/denmark_image01.jpg" />
      <Card.Body>
        <Card.Title>NISSAN NORDIC, DANSK FILIAL AF NISSAN NORDIC EUROPE OY, FINLAND
        Sales Company</Card.Title>
        <Card.Text>
Lyngbyvej 24
2100 Kobenhavn Ø
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



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

export default Services