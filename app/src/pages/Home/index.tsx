import React from 'react';
import {useRoute} from '@react-navigation/native';

import {Container, Title} from './styles';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Home" />
    </Container>
  );
};

export default Home;
