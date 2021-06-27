import React from "react";
import { BorderlessButton } from 'react-native-gesture-handler';

import { styles } from "./styles";
import { Fontisto } from '@expo/vector-icons';

import { ImageBackground, Text, View, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";

import { theme } from "../../global/styles/theme";

import BannerPng from '../../assets/banner.png';

export function AppointmentDetails() {

  const members = [
    { 
      id: '1', 
      username: 'Márcio', 
      avatar_url: 'https://github.com/mBr4ndon.png',
      status: 'online'
    },
    { 
      id: '2', 
      username: 'Márcio 2', 
      avatar_url: 'https://github.com/mBr4ndon.png',
      status: 'offline'
    },
  ]

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerPng}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Elo Hell Warriors
          </Text>
          <Text style={styles.subtitle}>
            Vamos feedar que nem dejenerados até chegar ao Iron IV
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member  data={item}/>
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>

    </Background>
  )
}