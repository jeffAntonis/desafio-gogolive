import React from 'react';
import Header from '../../components/Header';

import {Container, Title} from './styles';

const ProtecaoCivil: React.FC = () => {
  return (
    <Container>
      <Header title="Proteção Civil" />
      <Title>Covid</Title>
    </Container>
  );
};

export default ProtecaoCivil;
