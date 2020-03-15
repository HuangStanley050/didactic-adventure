import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import requireAuth from "../components/HOC/requireAuth";
import Loader from "../components/Loader";
import AnimeCard from "../components/AnimeCard";
import { connect } from "react-redux";
import { fetchDefaultAnimes } from "../store/actions/animeActions";

const Anime = props => {
  useEffect(() => {
    props.loadInitialData();
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Anime page</h2>
      <Container>
        {props.isLoading ? <Loader /> : null}
        <Row>
          {props.animes.map(anime => {
            return (
              <AnimeCard
                key={anime.title}
                title={anime.title}
                imageURL={anime.imgURL}
              />
            );
          })}
        </Row>
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
