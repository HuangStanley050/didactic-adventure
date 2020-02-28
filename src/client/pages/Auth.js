import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Auth = () => {
  const colStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "2rem auto"
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <h2 className="text-primary" style={{ textAlign: "center" }}>
        Login Method
      </h2>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row style={{ width: "80%" }}>
          <Col style={colStyle} xs="12">
            <Button style={{ display: "block", width: "60%" }} color="primary">
              Google
            </Button>
          </Col>
          <Col style={colStyle} xs="12">
            <Button style={{ display: "block", width: "60%" }} color="info">
              Twitter
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default {
  component: Auth
};
