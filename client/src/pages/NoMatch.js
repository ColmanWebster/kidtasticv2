import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
            <h1>
              <p>
                <a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY"></a>

                <iframe
                  src="https://giphy.com/embed/9J7tdYltWyXIY"
                  width="480"
                  height="404"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </p>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
