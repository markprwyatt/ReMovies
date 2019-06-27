import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import { fetchMovie, init, clearMovie, getCredits } from "../../actions/index";
import Button from "../Button";
import { connect } from "react-redux";
import styled from "styled-components";

const MoviePageWrapper = styled.div`
  display: flex;
  align-content: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
`;

const SubInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  max-width: 40%;
  padding: 1.5rem;
  width: 100%;
`;

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
`;

const P = styled.p`
  font-size: 1.3rem;
`;

const H3 = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 1rem 2rem black;
`;

const MovieViewPage = ({
  config,
  fetchMovie,
  init,
  getCredits,
  history,
  match,
  movie
}) => {
  useEffect(() => {
    clearMovie();
    init();
    fetchMovie(match.params.id);
    getCredits(match.params.id);
    Scroll.animateScroll.scrollToTop(500);
  }, [match.params.id]);

  if (config.base && movie.title) {
    return (
      <MoviePageWrapper>
        <ImageWrapper>
          <Image
            src={`${config.base.images.base_url}/${
              config.base.images.poster_sizes[5]
            }${movie.poster_path}`}
            alt="movie poster"
          />
        </ImageWrapper>
        <TitleWrapper>
          <H1>{movie.title}</H1>
          <SubInfoWrapper>
            <p>Released {movie.release_date.slice(0, 4)}</p>
            <p>
              {movie.genres.map(genre => (
                <span key={genre.id}>{genre.name + " "}</span>
              ))}
            </p>
          </SubInfoWrapper>
          <p>{movie.vote_average}</p>
          <div>
            <H3>{movie.tagline}</H3>
            <P>{movie.overview}</P>
          </div>
          <Button text="Back" handleClick={() => history.goBack()} />
        </TitleWrapper>
      </MoviePageWrapper>
    );
  }

  return <div>Loading...</div>;
};

const mapStateToProps = ({ movie, config }) => {
  return {
    movie,
    config
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie, init, clearMovie, getCredits }
)(MovieViewPage);
