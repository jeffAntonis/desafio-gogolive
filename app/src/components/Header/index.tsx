import React from 'react';

import {Container, Text} from './styles';

const Header: React.FC<{title: string}> = ({title}) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default Header;
