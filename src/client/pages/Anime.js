import React from "react";
import { Container } from "reactstrap";
import requireAuth from "../components/HOC/requireAuth";
import { fetchDefaultAnimes } from "../store/actions/animeActions";

const Anime = () => {
  return (
    <div>
      <Container>
        <h1>Anime page</h1>
      </Container>
    </div>
  );
};
const loadData = store => {
  store.dispatch(fetchDefaultAnimes());
};
export default {
  component: requireAuth(Anime),
  loadData
};
