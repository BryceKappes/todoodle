import { Carousel } from 'react-bootstrap';
import Image from '../assets/images/example.jpg'
import { MDBContainer, MDBIframe } from "mdbreact";

function Youtube(){
  return (
    <div className="carousel">
    <Carousel>
        <Carousel.Item>
            <MDBContainer className="text-center">
                <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
            </MDBContainer>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  );
};


export default Youtube;