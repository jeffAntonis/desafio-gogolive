import React from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import {Container, Content, Text} from './styles';

const Posts: React.FC<{categories: any; posts: any}> = ({
  categories,
  posts,
}: any) => {
  return (
    <>
      <Container>
        {posts.map((post: any, index: number) => {
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
