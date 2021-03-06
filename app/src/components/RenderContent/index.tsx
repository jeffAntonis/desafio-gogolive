import React, {useEffect, useState} from 'react';

import Posts from '../Posts';
import api from '../../services/api';
import {Post} from '../../interfaces/post';

import {Title, Content} from './styles';

const RenderContent: React.FC<{content: any}> = ({content}) => {
  const [posts, setPosts] = useState<[Post]>([]);

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

  if (content.length === 0) {
    return <Title>Nenhum registro encontrado</Title>;
  }

  return (
    <>
      {content.map((row: any) => (
        <>
          <Content>
            <Title key={row.title}>{row.title}</Title>
          </Content>
          {row.type === 'post' && (
            <Posts categories={row?.properties?.categories} posts={posts} />
          )}
        </>
      ))}
    </>
  );
};

export default RenderContent;
