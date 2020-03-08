import React, { useEffect } from "react";
import { Container } from "reactstrap";
import requireAuth from "../components/HOC/requireAuth";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { fetchDefaultAnimes } from "../store/actions/animeActions";

const Anime = props => {
  useEffect(() => {
    props.loadInitialData();
  }, []);
  return (
    <div>
      <Container>
        <h1>Anime page</h1>
        <Loader />
      </Container>
    </div>
  );
};
const loadData = store => {
  store.dispatch(fetchDefaultAnimes());
};
const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(fetchDefaultAnimes())
});
export default {
  component: connect(
    null,
    mapDispatch
  )(requireAuth(Anime)),
  loadData
};
