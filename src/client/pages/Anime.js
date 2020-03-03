import React from "react";
import { Container } from "reactstrap";
import requireAuth from "../components/HOC/requireAuth";

const Anime = () => {
  return (
    <div>
      <Container>
        <h1>Anime page</h1>
      </Container>
    </div>
  );
};

export default {
  component: requireAuth(Anime)
};
