import { Carousel } from 'react-bootstrap';
import { MDBContainer, MDBIframe } from "mdbreact";

function Youtube(){
  return (
    <Carousel className="carousel">
        <Carousel.Item>
            <MDBContainer>
                <MDBIframe src="https://www.youtube.com/embed/W9iUh23Xrsg" />
            </MDBContainer>
        </Carousel.Item>
        <Carousel.Item>
            <MDBContainer>
                <MDBIframe src="https://www.youtube.com/embed/lCOF9LN_Zxs" />
            </MDBContainer>
        </Carousel.Item>
        <Carousel.Item>
            <MDBContainer>
                <MDBIframe src="https://www.youtube.com/embed/lTRiuFIWV54" />
            </MDBContainer>
        </Carousel.Item>
    </Carousel>
  );
};


export default Youtube;