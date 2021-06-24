import React from 'react';
import { View, Text, Image } from 'react-native';

import { ButtonIcon} from '../../components/ButtonIcon';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  
  return (
    <View style={styles.container}>
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecta-te e{'\n'}
          diverte-te a ser{'\n'}
          #epicgamer
        </Text>

        <Text style={styles.subtitle}>
          Cria grupos para jogares os teus jogos {'\n'}
          favoritos com os teus amigos
        </Text>

        <ButtonIcon 
          title="Login com Discord"
          activeOpacity={.7}
        />

      </View>

    </View>
  );
}