import React,{Component} from "react";
import {Link} from "react-router-dom"
import { Reveal } from "react-reveal";


class About extends React.Component{
    render(){
        return(
            <>
    <Reveal effect="fade">
            <h1 style={{textAlign:"center"}}>About-Us</h1>
            <div className="about container-fluid d-flex justify-content-center">
            <img className="im1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAyVBMVEX////7+/vw9ffy+Pji6e3W3OGpxNXg5On09/jf5eiAlKbb4uYAQmzN193g5uyEp77Ay9EAP3VTa4dnnL0AQW4AW4dlmLRqk64WVXrIzNO2ucOlsr3o7vCuusS5xs8AADsAAEh2iZxDV3gAH1gAGVoAHlwAFFwpaY4AR3xPhKZ4n7kje6pUkLQAN15XcogAMWWbtsU0d50AZZMAHVAAN2eTqrtmepAAKFgAS3kcb5pEbIl4l61Ch68bQGNEW3ZXY30tVnKcnqo3R2fqLws0AAACaUlEQVRoge2aXU/bMBRAr41NnXimXrtSkjhhGbBSFjLKiMcKDYH//6N2Yxe2SSh9GZMm+TzY17HvkeOPSJUK5A2BQCAQCAQCgUAgEAj8C4ihrhbUNYiPHcJ1+Jg+D38OBPW/3LajXqc4/qj7uvyEhTpRWN6dnZ4hn2OMzeJ9z/k59+7lbOzzLr5UbjrV/oBcX9bOHk+w4O9Qzr4We45+TuOZj/f8PK9W42vpovHhtDIonw7LZflN/yG/uWIjhPXdzezA4VfDLK5gXhEvF9XU7JLfRGC/69/k0HxAbm9vG4zpcuZYRf3g+VKA+bHv5XBQVQJ2zBzT7ClvfsmBuEVpZm4AFYhZ9Uutr8e60Icr4+XA7iuxY+b9GpYn6xc5kZ67Xk4561dFLfA16Go5Ry7u51s50Pvpjg3tX5iUly9yc+RZ5PikOFo4lrgD44XxKatiKwdW3Q/JhXT7QyRzJZ4QEnmciUbM0T9nbJvDsMv4BmX0Ve3/jsGrlxCTKpIkKeGphCTtb6NJE+Apcy2VKqDYjpJEwEgJHEk59o4wk44G5HojzDGf6DJTmySpVcsfVMtAtInStZ7Ijq9Vx21SF2XWNFkJdhIlG8Utf9AP0WWsHofk66xcpyVICy08JpBlk7gWUGBOrKAp1nEdtbouajA2szanNs2gg1HZaMjSOo6bAXnaTGLL27zOMQXrJ5w5nkr6lOWqzVvZKUs7ZaDNbNbkNX+0cSs2IGvZ5R3rxGZITg0VEYECTzveJlNQiEDi8SJaYYsAx5b7IhYSGBWyHyc4nmDsFdhr2IA8EAgEAoFAIBAIBAJ/j7f8O8RPDjk53udjabEAAAAASUVORK5CYII=" alt="" />
                <p className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur officiis quos eligendi aliquid ipsam, soluta fuga, error exercitationem illum dolorum, incidunt laudantium quod nisi vel minus sunt modi id.
                Molestiae architecto consequuntur voluptas porro vitae tempore placeat quidem sint dolores optio. Quaerat, obcaecati officia nobis, mollitia enim culpa suscipit eaque et aut, id corrupti dicta ullam earum accusantium minus?
                Tempora eaque id a omnis laboriosam similique porro deserunt ea aliquid quibusdam sunt rem totam officiis, excepturi, perspiciatis, consequuntur asperiores mollitia commodi vel? Eveniet, autem voluptatem hic repellat alias minus!
                Ut consectetur qui tenetur voluptate tempora molestias perspiciatis labore cum! Cupiditate dolor dolorum assumenda facere quos accusamus aspernatur ratione quia ipsum, magnam doloremque voluptates voluptatum molestiae praesentium excepturi eaque odit!
                Molestiae est vitae in ullam fugit id, illo corrupti necessitatibus voluptas expedita laudantium nisi eveniet recusandae error blanditiis unde, excepturi aperiam vel libero beatae neque distinctio eos rerum ad. Dolor!</p>

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
export default About