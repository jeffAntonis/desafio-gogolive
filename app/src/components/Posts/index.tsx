import React from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import {Post} from '../../interfaces/post';

import {Container, Content, Text} from './styles';

const Posts: React.FC<{categories: any; posts: Post}> = ({
  categories,
  posts,
}: any) => {
  return (
    <>
      <Container>
        {posts.map((post: Post, index: number) => {
          if (!categories.includes(post.category)) {
            return;
          }

          return (
            <Content key={index}>
              <FontAwesome5Icons name="university" size={16} />
              <Text>{post.title}</Text>
            </Content>
          );
        })}
      </Container>
    </>
  );
};

export default Posts;
