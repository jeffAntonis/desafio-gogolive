import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';

import Header from '../../components/Header';
import RenderContent from '../../components/RenderContent';

import {Container} from './styles';

const Comunicar: React.FC = () => {
  const route = useRoute() as any;
  const [content] = useState([...route.params.content]);

  return (
    <Container>
      <Header title="Comunicar" />
      <RenderContent content={content} />
    </Container>
  );
};

export default Comunicar;
