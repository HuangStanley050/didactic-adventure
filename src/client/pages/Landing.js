import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hestiaAnime.png";

const Landing = () => {
  const backgroundStyle = {
    marginTop: "4rem",
    backgroundSize: "cover",
    backgroundImage: `url(${heroImg})`,
    color: "#2003fc"
  };
  return (
    <div>
      <Container>
        <Jumbotron style={backgroundStyle}>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>

          <div style={{ margin: "0 auto" }}>
            <Button
              style={{ display: "block", margin: "0 auto", width: "60%" }}
              tag={Link}
              to="/auth"
              color="primary"
            >
              Login
            </Button>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default {
  component: Landing
};
