import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon} from '../../components/ButtonIcon';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';


export function SignIn() {

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  } 
  
  return (
    <Background>
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
            onPress={handleSignIn}
          />

        </View>

      </View>
    </Background>
  );
}