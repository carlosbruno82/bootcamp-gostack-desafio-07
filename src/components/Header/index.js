import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Text } from './styles';

export default function Header({ navigation }) {
  function handleHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleHome}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </Container>
  );
}
