import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles'

export function SignIn() {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <Text>Boas meus putos 2</Text>

      <TextInput 
        style={styles.input}
        onChangeText={setText}
      />

      <Text>Mequie { text }</Text>
    </View>
  );
}