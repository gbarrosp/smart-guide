import React from 'react';

import {Container, IconVector, Text} from './styles';

export default function Header({title, to, size, navigation}) {
  return (
    <Container size={size}>
      <IconVector
        name="ios-arrow-back"
        onPress={() => navigation.navigate(to)}
        size={40}
      />
      <Text>{title}</Text>
    </Container>
  );
}
