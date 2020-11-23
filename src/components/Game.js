import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import loadDetail from '../actions/detailAction';

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyleGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyleGame>
  );
};

const StyleGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

Game.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};

export default Game;