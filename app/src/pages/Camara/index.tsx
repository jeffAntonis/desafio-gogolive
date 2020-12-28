import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import api from '../../services/api';

import Header from '../../components/Header';

import {Container, Title} from './styles';
import Posts from './components/Posts';

const Camara: React.FC = () => {
  const route = useRoute() as any;
  const [content, setContent] = useState([...route.params.content]);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const {data} = await api.get('/posts');
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Header title="Camara" />
      {content.map((row: any) => (
        <>
          <Title key={row.title}>{row.title}</Title>
          <Posts categories={row?.properties?.categories} posts={posts} />
        </>
      ))}
    </Container>
  );
};

export default Camara;
