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
        {props.isLoading ? <Loader /> : null}
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
const mapState = state => ({
  isLoading: state.anime.loading,
  animes: state.anime.defaultAnimes
});
export default {
  component: connect(
    mapState,
    mapDispatch
  )(requireAuth(Anime)),
  loadData
};
