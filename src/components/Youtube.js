import { Carousel } from 'react-bootstrap';
import { MDBContainer, MDBIframe } from "mdbreact";

function Youtube(){
  return (
    <Carousel className="carousel">
        <Carousel.Item>
            <MDBContainer>
                <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
            </MDBContainer>
        </Carousel.Item>
        <Carousel.Item>
            <MDBContainer>
                <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
            </MDBContainer>
        </Carousel.Item>
        <Carousel.Item>
            <MDBContainer>
                <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
            </MDBContainer>
        </Carousel.Item>
    </Carousel>
  );
};


export default Youtube;