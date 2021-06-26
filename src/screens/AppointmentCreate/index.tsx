import React, { useState } from "react";
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";

import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { CategorySelect } from "../../components/CategorySelect";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";

import { theme } from "../../global/styles/theme";
import { GuildProps } from "../../components/Guild";
import { Background } from "../../components/Background";


export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelected(guildSelected: GuildProps) {
    setGuild(guildSelected);
    handleCloseGuildsModal();
  }

  function handleSelectedCategory(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <Background>
        <ScrollView>
          <Header 
            title="Agendar partida"
          />

          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>

          <CategorySelect 
            hasCheckBox
            setCategory={handleSelectedCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton
              onPress={handleOpenGuildsModal}
            >
              <View style={styles.select}>
                { 
                  guild.name ? <GuildIcon /> : <View style={styles.image}/>        
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                  {guild.name ? guild.name : 'Seleciona um servidor'}
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>
          
            <View style={styles.field}>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>    
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>    
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

            </View>
          
            
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.textMax}>Máx 100 caracteres</Text>
            </View>

            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}       
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>


        </ScrollView>

      </Background>
      
      

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelected={handleGuildSelected}/>     
      </ModalView>
    </KeyboardAvoidingView>
  )
}